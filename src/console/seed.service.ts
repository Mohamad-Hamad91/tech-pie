import { Inject, Logger } from '@nestjs/common';
import { Console, Command, createSpinner } from 'nestjs-console';
import { ResumeService } from 'src/api/resume/resume.service';
import { City, Country } from 'src/utils/constants/countries';
import { Nationality } from 'src/utils/constants/nationalits';
import { Shift } from 'src/utils/constants/shift';
import { WorkType } from 'src/utils/constants/workType';
import { ObjectID } from 'mongodb';
import { UsersService } from 'src/api/users/users.service';

@Console()
export class SeedService {

    private logger = new Logger(SeedService.name);

    constructor(@Inject(ResumeService) private resumeService: ResumeService,
        @Inject(UsersService) private userService: UsersService,) { }

    @Command({
        command: 'seed',
        description: 'Seed DB',
    })
    async seed(): Promise<void> {
        this.logger.log('Seeds starts...');
        const spin = createSpinner();
        spin.start('Seeding the DB...');
        this.logger.log('Seeding Resumes...');
        await this.seedAdmin();
        await this.seedResume();
        spin.succeed('Seeding done.');
    }

    async seedResume() {
        await this.resumeService.create({
            email: 'any@mail.com',
            name: 'Emp name',
            photo: '',
            phone: '+963987654321',
            city: City.Damascus,
            address: '',
            birthDate: new Date(),
            nationality: Nationality.Syrian,
            available: true,
            availableAt: new Date(),
            workType: [WorkType.FREELANCE],
            shift: Shift.EVENING,
            summary: 'any thing',
            hobbies: 'reading',
            armyServiceStatus: null,
            employmentHistory: [],
            courses: [],
            education: [],
            links: [],
            projects: [],
            references: [],
            languages: [],
            skills: []
        }, new ObjectID('61c1d652d3fa6d932bbdef3a')
        );
    }

    async seedAdmin() {
        await this.userService.seedAdmin({
            _id: '61c1d652d3fa6d932bbdef3a',
            email: 'admin',
            password: 'admin',
            roles: ['ADMIN']
        });
    }
}