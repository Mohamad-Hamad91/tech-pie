import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {

    @ObjectIdColumn({ generated: true })
    id: ObjectID;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    roles: string[];

}
