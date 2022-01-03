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

@Injectable()
export class FileService {

    publicPath = './dist/public/';
    privatePath = './dist/private/';
    storeRemote = false;

    // constructor(@InjectRepository(MyFile) private fileRepository: Repository<MyFile>) { }
    constructor(@InjectModel(MyFile.name) private fileModel: Model<FileDocument>,) { }


    async save(file: Express.Multer.File, isPrivate: boolean, session: ClientSession): Promise<MyFile> {
        if (this.storeRemote) this.writeGCS(file);
        else this.writeLocal(isPrivate, file);
        return await this.saveOnDB(file, session);
    }

    async saveOnDB(file: Express.Multer.File, session: ClientSession): Promise<MyFile> {
        const { filename, originalname, mimetype, size } = file;
        const myFile = new this.fileModel({ filename, originalname, mimetype, size });
        return await myFile.save({ session });
    }

    async writeLocal(isPrivate: boolean, file: Express.Multer.File): Promise<void> {
        const path = isPrivate ? this.privatePath : this.publicPath;
        const fullPath = path + randomStringGenerator();
        await fs.mkdir(path, { recursive: true });
        await fs.writeFile(fullPath, file.buffer);
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

}