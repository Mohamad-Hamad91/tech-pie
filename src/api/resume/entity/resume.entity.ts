import { ArmyServiceStatus } from 'src/utils/constants/armyServiceStatus';
import { City, Country } from 'src/utils/constants/countries';
import { Nationality } from 'src/utils/constants/nationalits';
import { Shift } from 'src/utils/constants/shift';
import { WorkType } from 'src/utils/constants/workType';
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn, Unique } from 'typeorm';
import { Course } from './course.entity';
import { Education } from './education.entity';
import { EmploymentHistory } from './employment-history.entity';
import { Link } from './link.entity';
import { Project } from './project.entity';
import { References } from './reference.entity';
import { UserLang } from './user-lang.entity';
import { UserSkill } from './user-skill.entity';

@Entity()
export class Resume extends BaseEntity {
  @ObjectIdColumn({ generated: true })
  id: ObjectID;

  @ObjectIdColumn({ nullable: false, unique: true })
  userId: ObjectID;

  @Column()
  email: string;

  @Column()
  fName: string;

  @Column()
  lName: string;

  @ObjectIdColumn()
  photo: ObjectID;

  @Column()
  phone: string;

  @Column()
  country: Country = Country.Syria;

  @Column()
  city: City;

  @Column()
  address: string;

  @Column()
  birthDate: Date = new Date(1990, 1, 1);

  @Column()
  nationality: Nationality = Nationality.Syrian;

  @Column()
  available: boolean = true;

  @Column()
  availableAt: Date = new Date();

  @Column()
  workType: WorkType;

  @Column()
  shift: Shift = Shift.UNSPECIFIED;

  @Column()
  summary: string;

  @Column()
  hobbies: string;

  @Column()
  armyServiceStatus: ArmyServiceStatus = ArmyServiceStatus.Pending_For_Study;

  @Column((type) => EmploymentHistory)
  employmentHistory: EmploymentHistory[];

  @Column((type) => Course)
  courses: Course[];

  @Column((type) => Education)
  education: Education[];

  @Column((type) => Link)
  links: Link[];

  @Column((type) => Project)
  projects: Project[];

  @Column((type) => References)
  references: References[];

  @Column((type) => UserLang)
  languages: UserLang[];

  @Column((type) => UserSkill)
  skills: UserSkill[];
}
