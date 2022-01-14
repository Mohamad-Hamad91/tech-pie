import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { AuthService } from 'src/app/service/auth.service';
import { ConstantsService } from 'src/app/service/constants.service';
import { Constant } from 'src/app/shared/constants/constant.model';
import { CURRENCY } from 'src/app/shared/constants/currency.const';
import { GENDER } from 'src/app/shared/constants/gender.const';
import { GET_LANG_VALUE, LANG_LEVELS } from 'src/app/shared/constants/lang-levels.enum';
import { PRICE_UNIT } from 'src/app/shared/constants/price-unit.const';
import { GET_SKILL_VALUE, SKILL_LEVELS } from 'src/app/shared/constants/skill-levels.const';
import { ProfileService } from '../service/profile.service';
import { CourseDto } from './dto/courses.dto';
import { EducationDto } from './dto/education.dto';
import { EmpProfileDto } from './dto/emp-profile.dto';
import { EmploymentHistory } from './dto/employment-history.dto';
import { LanguageDto } from './dto/language.dto';
import { LinkDto } from './dto/links.dto';
import { ProjectDto } from './dto/project.dto';
import { ReferencesDto } from './dto/references.dto';
import { SkillDto } from './dto/skills.dto';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.scss']
})
export class EmpProfileComponent implements OnInit {

  //#region Data members definition
  data: EmpProfileDto = new EmpProfileDto();
  id: string;

  cities: string[];
  tempCities: string[];

  nationalities: string[];
  tempNationalities: string[];

  gender: Constant[] = GENDER;

  currency: Constant[] = CURRENCY;

  priceUnit: Constant[] = PRICE_UNIT;

  expertLevels: Constant[] = SKILL_LEVELS;
  langLevels: Constant[] = LANG_LEVELS;
  languages: string[];
  tempLanguages: string[];

  armyService: string[];
  tempArmyService: string[];

  workType: string[];
  tempWorkType: string[];

  skills: string[];
  tempSkills: string[];

  empHistoryDialog: boolean = false;
  tempEmpHistomry: EmploymentHistory = new EmploymentHistory();

  eduDialog: boolean = false;
  tempEdu: EducationDto = new EducationDto();

  courseDialog: boolean = false;
  tempCourse: CourseDto = new CourseDto();

  projectDialog: boolean = false;
  tempProject: ProjectDto = new ProjectDto();

  refDialog: boolean = false;
  tempRef: ReferencesDto = new ReferencesDto();

  linkDialog: boolean = false;
  tempLink: LinkDto = new LinkDto();

  skillDialog: boolean = false;
  tempSkill: SkillDto = new SkillDto();

  langDialog: boolean = false;
  tempLang: LanguageDto = new LanguageDto();
  imageSrc: string | ArrayBuffer;
  fromFrontAvatar: boolean;
  //#endregion Data member definition


  constructor(private _authService: AuthService,
    private _profileService: ProfileService,
    private _constService: ConstantsService,
    private _messageService: MessageService) { }

  ngOnInit(): void {
    this.id = this._authService.getId();
    this.getData();
  }

  getData() {
    this._profileService
      .getByUserId(this.id)
      .subscribe(res => {
        this.data = res;
        this.data.birthDate = this.data.birthDate ? new Date(this.data.birthDate) : null;
        this.data.skills = this.data.skills.map((val): SkillDto => {
          return { ...val, expertLevelValue: GET_SKILL_VALUE(val.expertLevel) };
        });
        this.data.languages = this.data.languages.map((val): LanguageDto => {
          return { ...val, expertValue: GET_LANG_VALUE(val.level) };
        });
      });
  }

  onAvatarUpload(e) {
    let file = e.files[0];
    this.data.avatar = file;
    const reader = new FileReader();
    this.fromFrontAvatar = true;
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(file);
  }

  save() {
    this.data.user = this.id;
    let formData = new FormData();
    if (this.data.avatar) {
      formData.append('avatar', this.data.avatar);
      delete this.data.avatar;
    }
    for (let key in this.data) {
      // debugger;
      if (typeof this.data[key] === 'object')
        formData.append(key, JSON.stringify(this.data[key]));
      else
        formData.append(key, this.data[key]);
    }

    if (this.data._id) {
      // update
      this._profileService
        .updateResume(formData, this.data._id)
        .subscribe(res => this._messageService.add({
          severity: 'success',
          life: 3000,
          detail: 'Updated Successfully!'
        }));
    } else {
      // create
      this._profileService.createResume(formData)
        .subscribe(res => {
          console.log(res);
          this.data._id = res._id;
        });
    }
  }


  //#region Autocomplete
  searchCities(event) {
    if (!this.cities) {
      this._constService.getCities().subscribe(res => {
        this.tempCities = res;
        this.cities = [...this.tempCities];
      })
    } else {
      this.cities = this.tempCities.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }

  searchNationalities(event) {
    if (!this.nationalities) {
      this._constService.getNationalities().subscribe(res => {
        this.tempNationalities = res;
        this.nationalities = [...this.tempNationalities];
      })
    } else {
      this.nationalities = this.tempNationalities.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }

  searchArmyService(event) {
    if (!this.armyService) {
      this._constService.getArmyStatus().subscribe(res => {
        this.tempArmyService = res;
        this.armyService = [...this.tempArmyService];
      });
    } else {
      this.armyService = this.tempArmyService.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }

  searchWorkType(event) {
    if (!this.workType) {
      this._constService.getWorkType().subscribe(res => {
        this.tempWorkType = res;
        this.workType = [...this.tempWorkType];
      })
    } else {
      this.workType = this.tempWorkType.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }

  searchSkills(event) {
    if (!this.skills) {
      this._constService.getSkills().subscribe(res => {
        this.tempSkills = res;
        this.skills = [...this.tempSkills];
      })
    } else {
      this.skills = this.tempSkills.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }

  searchLangs(event) {
    if (!this.languages) {
      this._constService.getLanguages().subscribe(res => {
        this.tempLanguages = res;
        this.languages = [...this.tempLanguages];
      })
    } else {
      this.languages = this.tempLanguages.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }
  //#endregion Autocomplete


  //#region Employment History
  displayEmpHistory() {
    this.tempEmpHistomry = new EmploymentHistory();
    this.empHistoryDialog = true;
  }

  addEmpHistory() {
    if (this.tempEmpHistomry._id && this.tempEmpHistomry.myIndex >= 0)
      this.data.employmentHistory[this.tempEmpHistomry.myIndex] = { ...this.tempEmpHistomry };
    else
      this.data.employmentHistory.push({ ...this.tempEmpHistomry });
    this.tempEmpHistomry = new EmploymentHistory();
    this.empHistoryDialog = false;
  }

  cancelEmpHistory() {
    this.tempEmpHistomry = new EmploymentHistory();
    this.empHistoryDialog = false;
  }

  deleteEmpHistory(i) {
    this.data.employmentHistory = this.data.employmentHistory.splice(i, 1);
  }

  editEmpHistory(i) {
    this.tempEmpHistomry = this.data.employmentHistory[i];
    this.tempEmpHistomry.myIndex = i;
    this.tempEmpHistomry.startDate = this.tempEmpHistomry.startDate ? new Date(this.tempEmpHistomry.startDate) : null;
    this.tempEmpHistomry.endDate = this.tempEmpHistomry.endDate ? new Date(this.tempEmpHistomry.endDate) : null;
    this.empHistoryDialog = true;
  }
  //#endregion Employment history


  //#region Education section
  displayEdu() {
    this.tempEdu = new EducationDto();
    this.eduDialog = true;
  }

  addEdu() {
    if (this.tempEdu._id && this.tempEdu.myIndex >= 0)
      this.data.education[this.tempEdu.myIndex] = { ...this.tempEdu };
    else
      this.data.education.push({ ...this.tempEdu });
    this.tempEdu = new EducationDto();
    this.eduDialog = false;
  }

  cancelEdu() {
    this.tempEdu = new EducationDto();
    this.eduDialog = false;
  }

  deleteEdu(i) {
    this.data.education = this.data.education.splice(i, 1);
  }

  editEdu(i) {
    this.tempEdu = this.data.education[i];
    this.tempEdu.myIndex = i;
    this.tempEdu.startDate = this.tempEdu.startDate ? new Date(this.tempEdu.startDate) : null;
    this.tempEdu.endDate = this.tempEdu.endDate ? new Date(this.tempEdu.endDate) : null;
    this.eduDialog = true;
  }
  //#endregion Education section


  //#region Courses section
  displayCourse() {
    this.tempCourse = new CourseDto();
    this.courseDialog = true;
  }

  addCourse() {
    if (this.tempCourse._id && this.tempCourse.myIndex >= 0)
      this.data.courses[this.tempCourse.myIndex] = { ...this.tempCourse };
    else
      this.data.courses.push({ ...this.tempCourse });
    this.tempCourse = new CourseDto();
    this.courseDialog = false;
  }

  cancelCourse() {
    this.tempCourse = new CourseDto();
    this.courseDialog = false;
  }

  deleteCourse(i) {
    this.data.courses = this.data.courses.splice(i, 1);
  }

  editCourse(i) {
    this.tempCourse = this.data.courses[i];
    this.tempCourse.myIndex = i;
    this.tempCourse.startDate = this.tempCourse.startDate ? new Date(this.tempCourse.startDate) : null;
    this.tempCourse.endDate = this.tempCourse.endDate ? new Date(this.tempCourse.endDate) : null;
    this.courseDialog = true;
  }
  //#endregion Courses section


  //#region Projects section
  displayProject() {
    this.tempProject = new ProjectDto();
    this.projectDialog = true;
  }

  addProject() {
    if (this.tempProject._id && this.tempProject.myIndex >= 0)
      this.data.projects[this.tempProject.myIndex] = { ...this.tempProject };
    else
      this.data.projects.push({ ...this.tempProject });
    this.tempProject = new ProjectDto();
    this.projectDialog = false;
  }

  cancelProject() {
    this.tempProject = new ProjectDto();
    this.projectDialog = false;
  }

  deleteProject(i) {
    this.data.projects = this.data.projects.splice(i, 1);
  }

  editProject(i) {
    this.tempProject = this.data.projects[i];
    this.tempProject.myIndex = i;
    this.tempProject.startDate = this.tempProject.startDate ? new Date(this.tempProject.startDate) : null;
    this.tempProject.endDate = this.tempProject.endDate ? new Date(this.tempProject.endDate) : null;
    this.projectDialog = true;
  }
  //#endregion Projects section


  //#region References section
  displayRef() {
    this.tempRef = new ReferencesDto();
    this.refDialog = true;
  }

  addRef() {
    if (this.tempRef._id && this.tempRef.myIndex >= 0)
      this.data.references[this.tempRef.myIndex] = { ...this.tempRef };
    else
      this.data.references.push({ ...this.tempRef });
    this.tempRef = new ReferencesDto();
    this.refDialog = false;
  }

  cancelRef() {
    this.tempRef = new ReferencesDto();
    this.refDialog = false;
  }

  deleteRef(i) {
    this.data.references = this.data.references.splice(i, 1);
  }

  editRef(i) {
    this.tempRef = this.data.references[i];
    this.tempRef.myIndex = i;
    this.refDialog = true;
  }
  //#endregion References section


  //#region Links section
  displayLink() {
    this.tempLink = new LinkDto();
    this.linkDialog = true;
  }

  addLink() {
    if (this.tempLink._id && this.tempLink.myIndex >= 0)
      this.data.links[this.tempLink.myIndex] = { ...this.tempLink };
    else
      this.data.links.push({ ...this.tempLink });
    this.tempLink = new LinkDto();
    this.linkDialog = false;
  }

  cancelLink() {
    this.tempLink = new LinkDto();
    this.linkDialog = false;
  }

  deleteLink(i) {
    this.data.links = this.data.links.splice(i, 1);
  }

  editLink(i) {
    this.tempLink = this.data.links[i];
    this.tempLink.myIndex = i;
    this.linkDialog = true;
  }
  //#endregion Links section


  //#region Skills section
  displaySkill() {
    this.tempSkill = new SkillDto();
    this.skillDialog = true;
  }

  addSkill() {
    this.tempSkill.expertLevelValue = GET_SKILL_VALUE(this.tempSkill.expertLevel);
    if (this.tempSkill._id && this.tempSkill.myIndex >= 0)
      this.data.skills[this.tempSkill.myIndex] = { ...this.tempSkill };
    else
      this.data.skills.push({ ...this.tempSkill });
    this.tempSkill = new SkillDto();
    this.skillDialog = false;
  }

  cancelSkill() {
    this.tempSkill = new SkillDto();
    this.skillDialog = false;
  }

  deleteSkill(i) {
    this.data.skills = this.data.skills.splice(i, 1);
  }

  editSkill(i) {
    this.tempSkill = this.data.skills[i];
    this.tempSkill.myIndex = i;
    this.skillDialog = true;
  }
  //#endregion Skills section


  //#region Languages section
  displayLang() {
    this.tempLang = new LanguageDto();
    this.langDialog = true;
  }

  addLang() {
    this.tempLang.expertValue = GET_LANG_VALUE(this.tempLang.level);
    if (this.tempLang._id && this.tempLang.myIndex >= 0)
      this.data.languages[this.tempLang.myIndex] = { ...this.tempLang };
    else
      this.data.languages.push({ ...this.tempLang });
    this.tempLang = new LanguageDto();
    this.langDialog = false;
  }

  cancelLang() {
    this.tempLang = new LanguageDto();
    this.langDialog = false;
  }

  deleteLang(i) {
    this.data.languages = this.data.languages.splice(i, 1);
  }

  editLang(i) {
    this.tempLang = this.data.languages[i];
    this.tempLang.myIndex = i;
    this.langDialog = true;
  }
  //#endregion Languages section


}
