import { City } from 'src/utils/constants/countries';
import { Degree } from 'src/utils/constants/degree';
import { School } from 'src/utils/constants/school';
import { Column } from 'typeorm';

export class Education {
  @Column()
  school: School | string = School.Damascus_University;

  @Column()
  Degree: Degree | string = Degree.Software_Engineering;

  @Column()
  startDate: Date = new Date();

  @Column()
  endDate: Date | 'Present' = 'Present';

  @Column()
  city: City = City.Damascus;

  @Column()
  description: string = '';
}
