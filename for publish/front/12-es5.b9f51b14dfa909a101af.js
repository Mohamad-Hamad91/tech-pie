!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"R+iC":function(t,i,a){"use strict";a.r(i),a.d(i,"PublicProfileModule",function(){return K});var o,c=a("ofXK"),r=a("tyNb"),s=a("ZPj8"),b=a("fXoL"),l=a("AytR"),u=a("tk/3"),d=((o=function(){function t(n){e(this,t),this._http=n,this._URL=l.a.baseURL+"resume/",this._compURL=l.a.baseURL+"company/"}return n(t,[{key:"getOne",value:function(e){return this._http.get(this._URL+e)}},{key:"getOneComp",value:function(e){return this._http.get(this._compURL+e)}},{key:"getByUserId",value:function(e){return this._http.get(this._URL+"user/"+e)}},{key:"getByCompId",value:function(e){return this._http.get(this._compURL+"user/"+e)}}]),t}()).\u0275fac=function(e){return new(e||o)(b.Wb(u.b))},o.\u0275prov=b.Ib({token:o,factory:o.\u0275fac,providedIn:"root"}),o),g=a("6uu6"),m=a("EtQq"),p=a("jQpT");function h(e,t){if(1&e&&(b.Sb(0,"a",24),b.Ec(1,"Offer"),b.Rb()),2&e){var n=b.bc();b.hc("routerLink","/c/offer/"+n.data.user)}}function f(e,t){if(1&e&&(b.Sb(0,"li"),b.Ec(1),b.Rb()),2&e){var n=t.$implicit;b.Ab(1),b.Fc(n)}}function v(e,t){if(1&e&&(b.Sb(0,"li"),b.Ec(1),b.Rb()),2&e){var n=t.$implicit;b.Ab(1),b.Fc(n)}}var C,O=((C=function(){function t(n,i,a){e(this,t),this._dataService=n,this._route=i,this._authService=a,this.byUser=!1,this.isLoggedIn=!1,this.isEmp=!1}return n(t,[{key:"ngOnInit",value:function(){var e=this;this._route.params.subscribe(function(t){var n;e.profileId=e._route.snapshot.params.id,e.byUser=!!(null===(n=e._route.snapshot.params.user)||void 0===n?void 0:n.trim()),e.getData()}),this.isLoggedIn=this._authService.isLoggedIn(),this.isEmp=this._authService.getRole()===s.a.USER}},{key:"getData",value:function(){var e=this;this.byUser?this._dataService.getByCompId(this.profileId).subscribe(function(t){return e.data=t}):this._dataService.getOneComp(this.profileId).subscribe(function(t){return e.data=t})}}]),t}()).\u0275fac=function(e){return new(e||C)(b.Mb(d),b.Mb(r.a),b.Mb(g.a))},C.\u0275cmp=b.Gb({type:C,selectors:[["app-view-comp-profile"]],decls:58,vars:13,consts:[[1,"container","resume"],[1,"resume-wrapper"],[1,"resume-pic-wrapper"],[1,"row","resume-header"],[1,"col-4","emp-photo-wrapper"],["alt","profile photo","width","150",1,"emp-photo",3,"src"],[1,"col-6","col-md-4","main-info"],[1,"name-wrapper"],[1,"name"],[1,"col-2"],["class","pi-btn",3,"routerLink",4,"ngIf"],[1,"row","resume-content"],[1,"col-9","resume-main-content"],[1,"resume-summary"],[4,"ngFor","ngForOf"],[1,"col-3","resume-side-content"],[1,"resume-address"],["src","assets/imgs/resume/map-pin.svg","alt","map pin","width","25"],[1,"resume-phone"],["src","assets/imgs/resume/phone.svg","alt","phone","width","25"],[1,"resume-mail"],["src","assets/imgs/resume/mail-message-new.svg","alt","mail","width","25"],["src","assets/imgs/global.svg","alt","website","width","25"],["src","assets/imgs/users1.svg","alt","users","width","25"],[1,"pi-btn",3,"routerLink"]],template:function(e,t){1&e&&(b.Nb(0,"app-navbar"),b.Sb(1,"section",0),b.Sb(2,"div",1),b.Nb(3,"div",2),b.Sb(4,"div",3),b.Sb(5,"div",4),b.Nb(6,"img",5),b.Rb(),b.Sb(7,"div",6),b.Sb(8,"div",7),b.Sb(9,"h2",8),b.Ec(10),b.Rb(),b.Rb(),b.Rb(),b.Sb(11,"div",9),b.Cc(12,h,2,1,"a",10),b.Rb(),b.Rb(),b.Sb(13,"div",11),b.Sb(14,"div",12),b.Sb(15,"div",13),b.Sb(16,"h3"),b.Ec(17,"Summary"),b.Rb(),b.Ec(18),b.Rb(),b.Nb(19,"hr"),b.Sb(20,"div",13),b.Sb(21,"h3"),b.Ec(22,"Employee Benifits"),b.Rb(),b.Sb(23,"ul"),b.Cc(24,f,2,1,"li",14),b.Rb(),b.Rb(),b.Nb(25,"hr"),b.Sb(26,"div",13),b.Sb(27,"h3"),b.Ec(28,"Tech Stack"),b.Rb(),b.Sb(29,"ul"),b.Cc(30,v,2,1,"li",14),b.Rb(),b.Rb(),b.Nb(31,"hr"),b.Sb(32,"div",13),b.Sb(33,"h3"),b.Ec(34,"About Company"),b.Rb(),b.Ec(35),b.Rb(),b.Nb(36,"hr"),b.Rb(),b.Sb(37,"div",15),b.Sb(38,"h4"),b.Ec(39,"Details"),b.Rb(),b.Sb(40,"div",16),b.Nb(41,"img",17),b.Ec(42),b.Rb(),b.Sb(43,"div",18),b.Nb(44,"img",19),b.Ec(45),b.Rb(),b.Sb(46,"div",20),b.Nb(47,"img",21),b.Ec(48),b.Rb(),b.Nb(49,"hr"),b.Sb(50,"div",20),b.Nb(51,"img",22),b.Ec(52),b.Rb(),b.Sb(53,"div",20),b.Nb(54,"img",23),b.Ec(55),b.Rb(),b.Nb(56,"hr"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Nb(57,"app-footer")),2&e&&(b.Ab(6),b.hc("src",t.data.logo?null==t.data.logo?null:t.data.logo.url:"assets/imgs/resume/resume-def-profile.svg",b.xc),b.Ab(4),b.Gc("",t.data.name," "),b.Ab(2),b.hc("ngIf",t.isLoggedIn&&t.isEmp),b.Ab(6),b.Gc(" ",t.data.description," "),b.Ab(6),b.hc("ngForOf",t.data.empBenifits),b.Ab(6),b.hc("ngForOf",t.data.techStack),b.Ab(5),b.Gc(" ",t.data.aboutContent," "),b.Ab(7),b.Hc(" ",t.data.address,", ",t.data.city," "),b.Ab(3),b.Gc(" ",t.data.phone," "),b.Ab(3),b.Gc(" ",t.data.email," "),b.Ab(4),b.Gc(" ",t.data.website," "),b.Ab(3),b.Gc(" ",t.data.compSize," "))},directives:[m.a,c.k,c.j,p.a,r.d],styles:[".profile-wrapper[_ngcontent-%COMP%]{min-height:90vh;padding-top:10%}[_nghost-%COMP%]{background-color:#f2f5fa;display:block}.resume[_ngcontent-%COMP%]{min-height:150vh;background-color:#fff;box-shadow:-4px -14px 10px #92959c;padding:0}.row[_ngcontent-%COMP%]{width:100%!important}.resume-wrapper[_ngcontent-%COMP%]{min-height:100vh;padding-bottom:10%}.resume-pic-wrapper[_ngcontent-%COMP%]{height:20vh;overflow:hidden;top:0;right:0;left:0;z-index:-1}.resume-pic[_ngcontent-%COMP%]{top:0;right:0;left:0;width:100%}.emp-photo-wrapper[_ngcontent-%COMP%]{padding:0 5%;position:-webkit-sticky;position:sticky}.emp-photo[_ngcontent-%COMP%]{transform:translateY(-35%)}.main-info[_ngcontent-%COMP%]{text-align:center;padding-top:1%;color:#383838;text-shadow:#7f8d73 1px 1px 2px}.main-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .main-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Ropa Sans,Lato,Courier New,Courier,monospace;font-weight:700}.resume-content[_ngcontent-%COMP%]{height:100%;min-height:80vh}.resume-availability[_ngcontent-%COMP%], .resume-courses[_ngcontent-%COMP%], .resume-edu[_ngcontent-%COMP%], .resume-experience[_ngcontent-%COMP%], .resume-projects[_ngcontent-%COMP%], .resume-references[_ngcontent-%COMP%], .resume-summary[_ngcontent-%COMP%]{text-align:justify;padding:0 5%}.resume-availability[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-courses[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-edu[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-experience[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-projects[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-references[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Aldrich,Lato,Courier New,Courier,monospace;font-weight:700;color:#e75113;padding-top:4%}.total-experience[_ngcontent-%COMP%]{font-weight:700;color:#0f3257;font-size:large}.employment-header[_ngcontent-%COMP%]{padding-top:3%;font-weight:700}.employment-date[_ngcontent-%COMP%]{color:#476868}.resume-side-content[_ngcontent-%COMP%]{background-color:#383838;min-height:80vh;text-align:left;color:#dbe4e9;padding:3% 2%;font-weight:600;line-height:2.2;font-size:1em;border-radius:10px;overflow:visible;inline-size:25%;overflow-wrap:break-word}.resume-side-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Aldrich,Lato,Courier New,Courier,monospace}@media screen and (max-width:800px){.resume-side-content[_ngcontent-%COMP%]{font-size:.5em}.progress[_ngcontent-%COMP%], .progress-bar[_ngcontent-%COMP%]{height:5px}}@media screen and (max-width:600px){.emp-photo[_ngcontent-%COMP%]{transform:translateY(-15%);width:100%}.main-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .main-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:500}.resume-side-content[_ngcontent-%COMP%]{font-size:.5em}.resume-side-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:1em!important}.resume-side-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-side-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2em!important}.progress[_ngcontent-%COMP%], .progress-bar[_ngcontent-%COMP%]{height:5px}}*[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]}),C),_=a("b/Rm"),P=a("faPK");function S(e,t){if(1&e){var n=b.Tb();b.Sb(0,"button",39),b.Zb("click",function(){return b.vc(n),b.bc().offer()}),b.Ec(1,"Offer"),b.Rb()}}function M(e,t){if(1&e&&(b.Sb(0,"span"),b.Ec(1),b.Rb()),2&e){var n=t.$implicit;b.Ab(1),b.Gc("",n,"; ")}}function R(e,t){if(1&e&&(b.Sb(0,"div"),b.Sb(1,"h4",40),b.Ec(2),b.Rb(),b.Sb(3,"div",41),b.Ec(4),b.cc(5,"date"),b.cc(6,"date"),b.Rb(),b.Sb(7,"div",42),b.Ec(8),b.Rb(),b.Rb()),2&e){var n=t.$implicit;b.Ab(2),b.Ic("",n.jobTitle," (",n.Employer,") ",n.city," "),b.Ab(2),b.Hc("",b.dc(5,6,n.startDate),"-",b.dc(6,8,n.endDate),""),b.Ab(4),b.Fc(n.description)}}function w(e,t){if(1&e&&(b.Sb(0,"div"),b.Sb(1,"h4",40),b.Ec(2),b.Rb(),b.Sb(3,"div",41),b.Ec(4),b.cc(5,"date"),b.cc(6,"date"),b.Rb(),b.Sb(7,"p"),b.Ec(8),b.Rb(),b.Rb()),2&e){var n=t.$implicit;b.Ab(2),b.Ic("",n.Degree,", ",n.school,", ",n.city,""),b.Ab(2),b.Hc("",b.dc(5,6,n.startDate)," - ",b.dc(6,8,n.endDate),""),b.Ab(4),b.Fc(n.description)}}function y(e,t){if(1&e&&(b.Sb(0,"div",43),b.Sb(1,"h3"),b.Ec(2,"Education"),b.Rb(),b.Cc(3,w,9,10,"div",17),b.Rb()),2&e){var n=b.bc();b.Ab(3),b.hc("ngForOf",null==n.data?null:n.data.education)}}function A(e,t){if(1&e&&(b.Sb(0,"div"),b.Sb(1,"h4",40),b.Sb(2,"a",45),b.Ec(3),b.Rb(),b.Rb(),b.Sb(4,"div",41),b.Ec(5),b.cc(6,"date"),b.cc(7,"date"),b.Rb(),b.Sb(8,"div",42),b.Ec(9),b.Rb(),b.Rb()),2&e){var n=t.$implicit;b.Ab(2),b.ic("href",n.link,b.xc),b.Ab(1),b.Hc(" ",n.name," (",n.institution,")"),b.Ab(2),b.Hc("",b.dc(6,6,n.startDate),"-",b.dc(7,8,n.endDate),""),b.Ab(4),b.Fc(n.description)}}function k(e,t){if(1&e&&(b.Sb(0,"div",44),b.Sb(1,"h3"),b.Ec(2,"Courses"),b.Rb(),b.Cc(3,A,10,10,"div",17),b.Rb()),2&e){var n=b.bc();b.Ab(3),b.hc("ngForOf",null==n.data?null:n.data.courses)}}function E(e,t){if(1&e&&(b.Sb(0,"div"),b.Sb(1,"h4",40),b.Sb(2,"a",45),b.Ec(3),b.Rb(),b.Rb(),b.Sb(4,"div",41),b.Ec(5),b.cc(6,"date"),b.cc(7,"date"),b.Rb(),b.Sb(8,"div",42),b.Ec(9),b.Rb(),b.Rb()),2&e){var n=t.$implicit;b.Ab(2),b.ic("href",n.link,b.xc),b.Ab(1),b.Gc(" ",n.title,""),b.Ab(2),b.Hc("",b.dc(6,5,n.startDate),"-",b.dc(7,7,n.endDate),""),b.Ab(4),b.Fc(n.description)}}function x(e,t){if(1&e&&(b.Sb(0,"div",46),b.Sb(1,"h3"),b.Ec(2,"Projects"),b.Rb(),b.Cc(3,E,10,9,"div",17),b.Rb()),2&e){var n=b.bc();b.Ab(3),b.hc("ngForOf",null==n.data?null:n.data.projects)}}function N(e,t){if(1&e&&(b.Sb(0,"div"),b.Sb(1,"h4",40),b.Ec(2),b.Rb(),b.Sb(3,"div",41),b.Ec(4),b.Rb(),b.Rb()),2&e){var n=t.$implicit;b.Ab(2),b.Hc("",n.name," (",n.company,")"),b.Ab(2),b.Hc("",n.email," - ",n.phone,"")}}function I(e,t){if(1&e&&(b.Sb(0,"div",47),b.Sb(1,"h3"),b.Ec(2,"References"),b.Rb(),b.Cc(3,N,5,4,"div",17),b.Rb()),2&e){var n=b.bc();b.Ab(3),b.hc("ngForOf",null==n.data?null:n.data.references)}}function j(e,t){if(1&e&&(b.Sb(0,"div"),b.Sb(1,"a",49),b.Ec(2),b.Rb(),b.Rb()),2&e){var n=t.$implicit;b.Ab(1),b.ic("href",n.value,b.xc),b.Ab(1),b.Fc(n.label)}}function L(e,t){if(1&e&&(b.Sb(0,"div",48),b.Sb(1,"h4"),b.Ec(2,"Links"),b.Rb(),b.Cc(3,j,3,2,"div",17),b.Rb()),2&e){var n=b.bc();b.Ab(3),b.hc("ngForOf",null==n.data?null:n.data.links)}}function F(e,t){if(1&e&&(b.Sb(0,"div"),b.Sb(1,"label",51),b.Ec(2),b.Rb(),b.Sb(3,"div",52),b.Nb(4,"div",53),b.Rb(),b.Rb()),2&e){var n=t.$implicit;b.Ab(2),b.Fc(n.value),b.Ab(2),b.Ac("width",n.expertLevelValue,"%")}}function G(e,t){if(1&e&&(b.Sb(0,"div",50),b.Sb(1,"h4"),b.Ec(2,"Skills"),b.Rb(),b.Cc(3,F,5,3,"div",17),b.Rb()),2&e){var n=b.bc();b.Ab(3),b.hc("ngForOf",null==n.data?null:n.data.skills)}}function z(e,t){if(1&e&&(b.Sb(0,"div"),b.Sb(1,"label",51),b.Ec(2),b.Rb(),b.Sb(3,"div",52),b.Nb(4,"div",53),b.Rb(),b.Rb()),2&e){var n=t.$implicit;b.Ab(2),b.Fc(n.value),b.Ab(2),b.Ac("width",n.expertValue,"%")}}function D(e,t){if(1&e&&(b.Sb(0,"div",54),b.Sb(1,"h4"),b.Ec(2,"Languages"),b.Rb(),b.Cc(3,z,5,3,"div",17),b.Rb()),2&e){var n=b.bc();b.Ab(3),b.hc("ngForOf",null==n.data?null:n.data.languages)}}var U,H,$,T=((U=function(){function t(n,i,a,o){e(this,t),this._dataService=n,this._route=i,this._router=a,this._authService=o,this.byuser=!1,this.isLoggedIn=!1}return n(t,[{key:"ngOnInit",value:function(){var e=this;this._route.params.subscribe(function(t){var n;e.resumeId=e._route.snapshot.params.id,e.byuser=!!(null===(n=e._route.snapshot.params.user)||void 0===n?void 0:n.trim()),e.getData(),e.isLoggedIn=e._authService.isLoggedIn()})}},{key:"getData",value:function(){var e=this;this.byuser?this._dataService.getByUserId(this.resumeId).subscribe(function(t){e.data=t,e.data.skills=e.data.skills.map(function(e){return Object.assign(Object.assign({},e),{expertLevelValue:Object(P.a)(e.expertLevel)})}),e.data.languages=e.data.languages.map(function(e){return Object.assign(Object.assign({},e),{expertValue:Object(_.a)(e.level)})})}):this._dataService.getOne(this.resumeId).subscribe(function(t){e.data=t,e.data.skills=e.data.skills.map(function(e){return Object.assign(Object.assign({},e),{expertLevelValue:Object(P.a)(e.expertLevel)})}),e.data.languages=e.data.languages.map(function(e){return Object.assign(Object.assign({},e),{expertValue:Object(_.a)(e.level)})})})}},{key:"handleHotkey",value:function(e){e.preventDefault()}},{key:"onRightClick",value:function(e){e.preventDefault()}},{key:"offer",value:function(){this._router.navigate(["/c/offer/"+this.data.user])}}]),t}()).\u0275fac=function(e){return new(e||U)(b.Mb(d),b.Mb(r.a),b.Mb(r.b),b.Mb(g.a))},U.\u0275cmp=b.Gb({type:U,selectors:[["app-view-emp-profile"]],hostBindings:function(e,t){1&e&&b.Zb("keydown",function(e){return t.handleHotkey(e)},!1,b.uc)("contextmenu",function(e){return t.onRightClick(e)})},decls:80,vars:26,consts:[[1,"container","resume"],[1,"resume-wrapper"],[1,"resume-pic-wrapper"],[1,"row","resume-header"],[1,"col-4","emp-photo-wrapper"],["alt","profile photo","width","150",1,"emp-photo",3,"src"],[1,"col-6","col-md-6","main-info"],[1,"name-wrapper"],[1,"name"],[1,"dev-title-wrapper"],[1,"dev-title"],[1,"col-2"],["class","pi-btn",3,"click",4,"ngIf"],[1,"row","resume-content"],[1,"col-9","resume-main-content"],[1,"resume-summary"],[1,"resume-availability"],[4,"ngFor","ngForOf"],[1,"resume-experience"],[1,"total-experience"],["class","resume-edu",4,"ngIf"],["class","resume-courses",4,"ngIf"],["class","resume-projects",4,"ngIf"],["class","resume-references",4,"ngIf"],[1,"col-3","resume-side-content"],[1,"resume-address"],["src","assets/imgs/resume/map-pin.svg","alt","map pin","width","25"],[1,"resume-nationality"],["src","assets/imgs/resume/flag.svg","alt","mail","width","25"],[1,"resume-gender"],["src","assets/imgs/resume/gender.svg","alt","gender","width","25"],[1,"resume-army-service"],["src","assets/imgs/resume/army-s.svg","alt","army-service","width","50",2,"margin-left","-2%"],[1,"resume-birth"],["src","assets/imgs/resume/owl-party.svg","alt","birth","width","25",2,"margin-top","-10px"],["class","resume-links",4,"ngIf"],["class","resume-skills",4,"ngIf"],["class","resume-langs",4,"ngIf"],[1,"resume-hobbies"],[1,"pi-btn",3,"click"],[1,"employment-header"],[1,"employment-date"],[1,"responsibilities"],[1,"resume-edu"],[1,"resume-courses"],[3,"href"],[1,"resume-projects"],[1,"resume-references"],[1,"resume-links"],["target","_blank",3,"href"],[1,"resume-skills"],["for",""],[1,"progress"],[1,"progress-bar","progress-bar-striped"],[1,"resume-langs"]],template:function(e,t){1&e&&(b.Nb(0,"app-navbar"),b.Sb(1,"section",0),b.Sb(2,"div",1),b.Nb(3,"div",2),b.Sb(4,"div",3),b.Sb(5,"div",4),b.Nb(6,"img",5),b.Rb(),b.Sb(7,"div",6),b.Sb(8,"div",7),b.Sb(9,"h2",8),b.Ec(10),b.Rb(),b.Rb(),b.Sb(11,"div",9),b.Sb(12,"h4",10),b.Ec(13),b.Rb(),b.Rb(),b.Rb(),b.Sb(14,"div",11),b.Cc(15,S,2,0,"button",12),b.Rb(),b.Rb(),b.Sb(16,"div",13),b.Sb(17,"div",14),b.Sb(18,"div",15),b.Sb(19,"h3"),b.Ec(20,"Summary"),b.Rb(),b.Ec(21),b.Rb(),b.Nb(22,"hr"),b.Sb(23,"div",16),b.Sb(24,"h3"),b.Ec(25,"Availability"),b.Rb(),b.Sb(26,"span"),b.Ec(27),b.Rb(),b.Sb(28,"h6"),b.Ec(29,"Preferrable Work Type: "),b.Cc(30,M,2,1,"span",17),b.Rb(),b.Sb(31,"h6"),b.Ec(32),b.Rb(),b.Rb(),b.Nb(33,"hr"),b.Sb(34,"div",18),b.Sb(35,"h3"),b.Ec(36,"Employment History"),b.Rb(),b.Sb(37,"span",19),b.Ec(38),b.Rb(),b.Cc(39,R,9,10,"div",17),b.Rb(),b.Nb(40,"hr"),b.Cc(41,y,4,1,"div",20),b.Nb(42,"hr"),b.Cc(43,k,4,1,"div",21),b.Nb(44,"hr"),b.Cc(45,x,4,1,"div",22),b.Nb(46,"hr"),b.Cc(47,I,4,1,"div",23),b.Rb(),b.Sb(48,"div",24),b.Sb(49,"h4"),b.Ec(50,"Details"),b.Rb(),b.Sb(51,"div",25),b.Nb(52,"img",26),b.Ec(53),b.Rb(),b.Nb(54,"hr"),b.Sb(55,"div",27),b.Nb(56,"img",28),b.Ec(57),b.Rb(),b.Sb(58,"div",29),b.Nb(59,"img",30),b.Ec(60),b.Rb(),b.Sb(61,"div",31),b.Nb(62,"img",32),b.Ec(63),b.Rb(),b.Sb(64,"div",33),b.Nb(65,"img",34),b.Ec(66),b.Rb(),b.Nb(67,"hr"),b.Cc(68,L,4,1,"div",35),b.Nb(69,"hr"),b.Cc(70,G,4,1,"div",36),b.Nb(71,"hr"),b.Cc(72,D,4,1,"div",37),b.Nb(73,"hr"),b.Sb(74,"div",38),b.Sb(75,"h3"),b.Ec(76,"Hobbies"),b.Rb(),b.Sb(77,"span"),b.Ec(78),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Nb(79,"app-footer")),2&e&&(b.Ab(6),b.hc("src",null!=t.data&&t.data.photo?t.data.photo.url:"assets/imgs/resume/resume-def-profile.svg",b.xc),b.Ab(4),b.Gc(" ",null==t.data?null:t.data.name," "),b.Ab(3),b.Gc(" ",null==t.data?null:t.data.title," "),b.Ab(2),b.hc("ngIf",t.isLoggedIn),b.Ab(6),b.Gc(" ",null==t.data?null:t.data.summary," "),b.Ab(6),b.Gc("Available: ",null==t.data?null:t.data.available,""),b.Ab(3),b.hc("ngForOf",null==t.data?null:t.data.workType),b.Ab(2),b.Ic("Minimum Salary: ",null==t.data?null:t.data.expectedPriceMin,"",null==t.data?null:t.data.expectedPriceCurrency," for ",null==t.data?null:t.data.expectedPriceUnit,""),b.Ab(6),b.Gc("Total: ",null==t.data?null:t.data.totalExperience," years"),b.Ab(1),b.hc("ngForOf",null==t.data?null:t.data.employmentHistory),b.Ab(2),b.hc("ngIf",(null==t.data||null==t.data.education?null:t.data.education.length)>0),b.Ab(2),b.hc("ngIf",(null==t.data||null==t.data.courses?null:t.data.courses.length)>0),b.Ab(2),b.hc("ngIf",(null==t.data||null==t.data.projects?null:t.data.projects.length)>0),b.Ab(2),b.hc("ngIf",null==t.data?null:t.data.references),b.Ab(6),b.Hc(" ",null==t.data?null:t.data.address,", ",null==t.data?null:t.data.city," "),b.Ab(4),b.Gc(" ",null==t.data?null:t.data.nationality," "),b.Ab(3),b.Gc(" ",null==t.data?null:t.data.gender," "),b.Ab(3),b.Gc(" ",null==t.data?null:t.data.armyServiceStatus," "),b.Ab(3),b.Gc(" ",null==t.data?null:t.data.birthDate," "),b.Ab(2),b.hc("ngIf",(null==t.data||null==t.data.links?null:t.data.links.length)>0),b.Ab(2),b.hc("ngIf",(null==t.data||null==t.data.skills?null:t.data.skills.length)>0),b.Ab(2),b.hc("ngIf",(null==t.data||null==t.data.languages?null:t.data.languages.length)>0),b.Ab(6),b.Fc(null==t.data?null:t.data.hobbies))},directives:[m.a,c.k,c.j,p.a],pipes:[c.d],styles:["[_nghost-%COMP%]{background-color:#f2f5fa;display:block}.resume[_ngcontent-%COMP%]{min-height:150vh;background-color:#fff;box-shadow:-4px -14px 10px #92959c;padding:0}.row[_ngcontent-%COMP%]{width:100%!important}.resume-wrapper[_ngcontent-%COMP%]{min-height:100vh;padding-bottom:10%}.resume-pic-wrapper[_ngcontent-%COMP%]{height:20vh;overflow:hidden;top:0;right:0;left:0;z-index:-1}.resume-pic[_ngcontent-%COMP%]{top:0;right:0;left:0;width:100%}.emp-photo-wrapper[_ngcontent-%COMP%]{padding:0 5%;position:-webkit-sticky;position:sticky}.emp-photo[_ngcontent-%COMP%]{transform:translateY(-35%)}.main-info[_ngcontent-%COMP%]{text-align:center;padding-top:1%;color:#383838;text-shadow:#7f8d73 1px 1px 2px}.main-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .main-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Ropa Sans,Lato,Courier New,Courier,monospace;font-weight:700}.resume-content[_ngcontent-%COMP%]{height:100%;min-height:80vh}.resume-availability[_ngcontent-%COMP%], .resume-courses[_ngcontent-%COMP%], .resume-edu[_ngcontent-%COMP%], .resume-experience[_ngcontent-%COMP%], .resume-projects[_ngcontent-%COMP%], .resume-references[_ngcontent-%COMP%], .resume-summary[_ngcontent-%COMP%]{text-align:justify;padding:0 5%}.resume-availability[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-courses[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-edu[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-experience[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-projects[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-references[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Aldrich,Lato,Courier New,Courier,monospace;font-weight:700;color:#e75113;padding-top:4%}.total-experience[_ngcontent-%COMP%]{font-weight:700;color:#0f3257;font-size:large}.employment-header[_ngcontent-%COMP%]{padding-top:3%;font-weight:700}.employment-date[_ngcontent-%COMP%]{color:#476868}.resume-side-content[_ngcontent-%COMP%]{background-color:#383838;min-height:80vh;text-align:left;color:#dbe4e9;padding:3% 2%;font-weight:600;line-height:2.2;font-size:1em;border-radius:10px;overflow:visible;inline-size:25%;overflow-wrap:break-word}.resume-side-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Aldrich,Lato,Courier New,Courier,monospace}@media screen and (max-width:800px){.resume-side-content[_ngcontent-%COMP%]{font-size:.5em}.progress[_ngcontent-%COMP%], .progress-bar[_ngcontent-%COMP%]{height:5px}}@media screen and (max-width:600px){.emp-photo[_ngcontent-%COMP%]{transform:translateY(-15%);width:100%}.main-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .main-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:500}.resume-side-content[_ngcontent-%COMP%]{font-size:.5em}.resume-side-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:1em!important}.resume-side-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resume-side-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2em!important}.progress[_ngcontent-%COMP%], .progress-bar[_ngcontent-%COMP%]{height:5px}}*[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]}),U),B=[{path:"r/:user/:id",component:T},{path:"c/:user/:id",component:O},{path:"r/:id",component:T},{path:"c/:id",component:O}],V=((H=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||H)},H.\u0275mod=b.Kb({type:H}),H.\u0275inj=b.Jb({imports:[[r.e.forChild(B)],r.e]}),H),J=a("PCNd"),K=(($=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||$)},$.\u0275mod=b.Kb({type:$}),$.\u0275inj=b.Jb({imports:[[c.b,V,J.a]]}),$)}}])}();