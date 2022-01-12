import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
// import { pipeline } from 'stream';
import { Readable, pipeline } from 'stream';
// import { InjectRepository } from '@nestjs/typeorm';
// import { ObjectID, Repository } from 'typeorm';
// import { MyFile } from './file.entity';
import { ObjectId, Model, ClientSession } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MyFile, FileDocument } from './file.schema';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { Storage } from '@google-cloud/storage';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileService {

    // constructor(@InjectRepository(MyFile) private fileRepository: Repository<MyFile>) { }
    constructor(@InjectModel(MyFile.name) private fileModel: Model<FileDocument>,
        private config: ConfigService) { }


    async save(file: Express.Multer.File, isPrivate: boolean, session: ClientSession): Promise<MyFile> {
        let filename;
        if (this.config.get('STORE_REMOTE') == true) await this.writeGCS(file);
        else filename = await this.writeLocal(isPrivate, file);
        file.filename = filename;
        return await this.saveOnDB(file, isPrivate, session);
    }

    async delete(id: string, isPrivate: boolean, session?: ClientSession) {
        const file = await this.fileModel.findOneAndDelete({ id });
        if (file && file.filename)
            this.unlinkFile(isPrivate, file.filename);
    }

    async saveOnDB(file: Express.Multer.File, isPrivate: boolean, session?: ClientSession): Promise<MyFile> {
        const { filename, originalname, mimetype, size } = file;
        const myFile = new this.fileModel({ filename, originalname, mimetype, size });
        myFile.isPrivate = isPrivate;
        myFile.isLocal = this.config.get('STORE_REMOTE');
        //TODO: should be done as virtual property
        myFile.url = this.config.get('DOMAIN') + 'public/' + filename;
        return await myFile.save({ session });
    }

    async writeLocal(isPrivate: boolean, file: Express.Multer.File): Promise<string> {
        const basePath = isPrivate ? this.config.get('PRIVATE_PATH') : this.config.get('PUBLIC_PATH');
        const randomName = randomStringGenerator();
        const fullPath = basePath + randomName;
        await fs.mkdir(basePath, { recursive: true });
        await fs.writeFile(fullPath, file.buffer);
        const path = isPrivate ? fullPath : this.config.get('DOMAIN') + 'public/' + randomName;
        return randomName;
    }


    async writeGCS(file: Express.Multer.File) {

        const storage = new Storage({
            projectId: 'my-project',
            keyFile: 'my-project.json'
        });

        const bucket = storage.bucket('my-bucket');
        const blob = bucket.file(file.originalname);
        const blobStream = blob.createWriteStream({ resumable: true });
        const stream = Readable.from(file.buffer);
        //let pipe = stream.pipe(blobStream);
        await pipeline(stream, blobStream);
        return bucket.name + '/' + blob.name;
    }

    async unlinkFile(isPrivate: boolean, filename: string) {
        const basePath = isPrivate ? this.config.get('PRIVATE_PATH') : this.config.get('PUBLIC_PATH');
        const fullPath = basePath + filename;
        await fs.unlink(fullPath);
    }
}