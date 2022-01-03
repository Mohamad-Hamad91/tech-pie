import { Column } from 'typeorm';

export class Link {
  @Column()
  label: string = '';

  @Column()
  value: string = '';
}
