import { CacheModule, Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
// import { Resume } from './entity/resume.entity';
// import { MyFile } from 'src/utils/file/file.entity';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ResumeService } from './resume.service';
import { AuthModule } from '../auth/auth.module';
import { AutoCompleteService } from 'src/utils/autocomplete/autocomplete-redis';
import { FileModule } from 'src/utils/file/file.module';
import { FileService } from 'src/utils/file/file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from './schema/resume.schema';
import { Course, CourseSchema } from './schema/course.schema';
import { Education, EducationSchema } from './schema/education.schema';
import { EmploymentHistory, EmploymentHistorySchema } from './schema/employment-history.schema';
import { Link, LinkSchema } from './schema/link.schema';
import { Project, ProjectSchema } from './schema/project.schema';
import { References, ReferencesSchema } from './schema/reference.schema';
import { UserLang, UserLangSchema } from './schema/user-lang.schema';
import { UserSkill, UserSkillSchema } from './schema/user-skill.schema';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { FileSchema, MyFile } from 'src/utils/file/file.schema';
import { User, UserSchema } from '../users/users.schema';
import { SearchService } from './search/search.service';
import { SearchController } from './search/search.controller';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Resume, MyFile]),
    MongooseModule.forFeature([
      { name: Resume.name, schema: ResumeSchema },
      { name: Course.name, schema: CourseSchema },
      { name: Education.name, schema: EducationSchema },
      { name: EmploymentHistory.name, schema: EmploymentHistorySchema },
      { name: Link.name, schema: LinkSchema },
      { name: Project.name, schema: ProjectSchema },
      { name: References.name, schema: ReferencesSchema },
      { name: UserLang.name, schema: UserLangSchema },
      { name: UserSkill.name, schema: UserSkillSchema },
      { name: MyFile.name, schema: FileSchema },
      { name: User.name, schema: UserSchema }
    ]),
    AuthModule,
    FileModule,
    UsersModule,
    CacheModule.register()
  ],
  controllers: [ResumeController, SearchController],
  providers: [FileService, UsersService, ResumeService, AutoCompleteService, SearchService],
  exports: [ResumeService],
})
export class ResumeModule { }
