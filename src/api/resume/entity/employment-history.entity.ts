import { City } from 'src/utils/constants/countries';
import { Column } from 'typeorm';

export class EmploymentHistory {
  @Column()
  jobTitle: string = '';

  @Column()
  Employer: string = '';

  @Column()
  startDate: Date = new Date();

  @Column()
  endDate: Date | 'Present' = 'Present';

  @Column()
  city: City = City.Damascus;

  @Column()
  description: string = '';
}
