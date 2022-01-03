import { Column } from 'typeorm';

export class Course {
  @Column()
  name: string = '';

  @Column()
  institution: string = '';

  @Column()
  startDate: Date = new Date();

  @Column()
  endDate: Date = new Date();

  @Column()
  link: string = '';

  @Column()
  description: string = '';
}
