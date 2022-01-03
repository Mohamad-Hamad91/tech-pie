import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class MyFile extends BaseEntity {

    @ObjectIdColumn({ generated: true })
    id: ObjectID;

    @Column()
    filename: string;

    @Column()
    originalname: string;

    @Column()
    mimetype: string;

    @Column()
    url: string;

    @Column()
    size: number;

    @Column()
    isPrivate: boolean;

    @Column()
    isLocal: string;

}