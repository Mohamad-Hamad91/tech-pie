import { Column } from 'typeorm';

export class Project {
  @Column()
  title: string = '';

  @Column()
  description: string = '';

  @Column()
  startDate: Date = new Date();

  @Column()
  endDate: Date = new Date();
}
