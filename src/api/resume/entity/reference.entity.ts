import { Column } from 'typeorm';

export class References {
  @Column()
  name: string = '';

  @Column()
  phone: string = '';

  @Column()
  email: string = '';

  @Column()
  company: string = '';
}
