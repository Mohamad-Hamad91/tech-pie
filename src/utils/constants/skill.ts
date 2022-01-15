export enum Skill {
  Front_End = 'Front-End',
  Back_End = 'Back-End',
  App_Dev = 'Application Development',
  Web_Dev = 'Web Development',
  Full_Stack_Dev = 'Fullstack Development',
  Mobile_Dev = 'Mobile Application Development',
  Dev_Ops = 'Dev-Ops',
  Server_Admin = 'Server Administrator',
  NetWorking = 'NetWorking',

  Native_Mobile_App = 'Native Mobile Application',
  Swift_IOS_Dev = 'Swift IOS Developer',

  //#region Hybrid mobile
  React_Native = 'React_Native',
  Flutter = 'Flutter',
  Ionic = 'Ionic',
  Ionic_Cordova = 'Ionic_Cordova',
  NativeScript = 'NativeScript',
  Xamarin = 'Xamarin',
  //#endregion Hybrid mobile

  C = 'C',
  C_PLUS = 'C++',
  CGI = 'CGI',
  GCC = 'GCC',
  GNU_Fortran = 'GNU Fortran',
  GnuCOBOL = 'GnuCOBOL',
  Gnuplot = 'Gnuplot',
  GTK = 'GTK',
  Haxe = 'Haxe',
  GNU_Octave = 'GNU Octave',
  homebrew = 'homebrew',

  //#region Games
  Unity = 'Unity',
  Unreal = 'Unreal',
  CryEngine = 'CryEngine',
  GameMaker = 'GameMaker',
  Godot = 'Godot',
  libGDX = 'libGDX',
  RPG_Maker = 'RPG Maker',
  Urho3D = 'Urho3D',
  AppGameKit = 'AppGameKit',
  //#endregion Games

  //#region Microsoft tecnologies
  C_Sharp = 'C#',
  ASP_NET = 'ASP.NET',
  ASP_MVC = 'ASP MVC',
  ASP_WEB_API = 'ASP WEB API',
  Silverlight = 'Silverlight',
  Azure = 'Azure',
  TFS = 'TFS',
  //#endregion

  //#region Java and kotlin
  Java = 'Java',
  Kotlin = 'Kotlin',
  Java_Spring = 'Java Spring',
  Hibernate = 'Hibernate',
  Maven = 'Maven',
  Gradle = 'Gradle',
  Android_Native = 'Android Native',
  //#endregion Java

  //#region Package manager
  npm = 'npm',
  Bower = 'Bower',
  Composer = 'Composer',
  Nuget = 'Nuget',
  Yarn = 'Yarn',
  //#endregion

  SocketIO = 'Socket.IO',

  //#region JS
  JavaScript = 'JavaScript',
  ReactJs = 'ReactJs',
  ReactiveX = 'ReactiveX',
  VueJs = 'VueJS',
  VueX = 'VueX',
  AngularJs = 'AngularJs',
  Babel = 'Babel',
  BackboneJs = 'BackboneJs',
  Bluebird = 'Bluebird',
  ChaiJs = 'ChaiJs',
  Clojure = 'Clojure',
  D3JS = 'D3JS',
  Electron = 'Electron',
  EmberJs = 'EmberJs',
  Express = 'Express',
  Koa = 'Koa',
  Fastify = 'Fastify',
  Flow_checker = 'Flow checker',
  ImmutableJS = 'ImmutableJS',
  KnockoutJS = 'KnockoutJS',
  Leaflet = 'Leaflet',
  lodash = 'lodash',
  Backbone_Marionette = 'Backbone.Marionette',
  Meteor = 'Meteor',
  Modernizr = 'Modernizr',
  Puppeteer = 'Puppeteer',
  RelayJS = 'RelayJS',
  RequireJS = 'RequireJS',
  SinonJS = 'SinonJS',
  UnderscoreJs = 'UnderscoreJs',
  //#endregion JS

  TypeScript = 'TypeScript',
  Angular = 'Angular',
  ESLint = 'ESLint',

  //#region Python
  Python = 'Python',
  Python_Bottle = 'Python Bottle',
  Django = 'Django',
  Django_REST = 'Django Rest',
  Flask = 'Flask',
  Graphite = 'Graphite',
  TensorFlow = 'TensorFlow',
  Py_Trio = 'Python Trio',
  //#endregion

  //#region Template Engines
  HandlebarsJs = 'HandlebarsJs',
  Jinja = 'Jinja',
  Blade = 'Blade',
  //#endregion Template Engines

  Ruby = 'Ruby',
  Ruby_on_Rails = 'Ruby on Rails',
  Liquid = 'Liquid',
  Go = 'Go',
  Erlang = 'Erlang',
  Groovy = 'Groovy',
  CoffeeScript = 'CoffeeScript',
  Crystal = 'Crystal',
  D = 'D Lang',
  Phobos = 'Phobos',
  R = 'R Lang',
  Dart = 'Dart',
  Emacs_Lisp = 'Emacs Lisp',
  Dojo = 'Dojo',
  Elixir = 'Elixir',
  haskell = 'haskell',
  Lua = 'Lua',
  LÖVE = 'Lua LÖVE',
  Rust = 'Rust',
  SaltStack = 'SaltStack',
  Scala = 'Scala',
  scikit_image = 'scikit-image',

  //#region PHP
  PHP = 'PHP',
  CakePHP = 'CakePHP',
  CodeIgniter = 'CodeIgniter',
  Laravel = 'Laravel',
  Falcon = 'Falcon',
  Symfony = 'Symfony',
  Yii = 'Yii',
  //#endregion PHP

  //#region Meta Meta
  NextJs = 'NextJs',
  NuxtJs = 'NuxtJs',
  NestJs = 'NestJs',
  RemixJs = 'RemixJs',
  //#endregion Meta Meta

  //#region Testing
  Codeception = 'Codeception',
  CodeceptJS = 'CodeceptJS',
  Cypress = 'Cypress',
  Enzyme = 'Enzyme',
  Jasmine = 'Jasmine',
  Jest = 'Jest',
  Mocha = 'Mocha',
  PHPUnit = 'PHPUnit',
  Ruby_Minitest = 'Ruby Minitest',
  //#endregion Testing

  //#region Basic Front-end
  HTML = 'HTML',
  CSS = 'CSS',
  SCSS = 'SCSS',
  SASS = 'SASS',
  Less = 'Less',
  SVG = 'SVG',
  Bootstrap = 'Bootstrap',
  nokogiri = 'nokogiri',
  //#endregion Basic Front-end

  //#region CMS
  WordPress = 'WordPress',
  Drupal = 'Drupal',
  //#endregion CMS

  //#region E-commerce
  WooCommerce = 'WooCommerce',
  Shopify = 'Shopify',
  Magento = 'Magento',
  //#endregion E-Commerce

  //#region DBs
  SQL = 'SQL',
  MsSQL = 'MsSQL',
  MariaDB = 'MariaDB',
  Oracle = 'Oracle',
  Postgres = 'Postgres',
  MySQL = 'MySQL',
  MongoDB = 'MongoDB',
  Firebase = 'Firebase',
  CouchDB = 'CouchDB',
  Redis = 'Redis',
  Redux = 'Redux',
  RethinkDB = 'RethinkDB',
  SQLite = 'SQLite',
  //#endregion DBs

  //#region ORM
  Mongoose = 'Mongoose',
  Sequelize = 'Sequelize',
  //#endregion ORM

  //#region DevOps
  Bash = 'Bash',
  Fish_shell = 'Fish shell',
  Docker = 'Docker',
  Apache_Server = 'Apache Server',
  NginX = 'NginX',
  HAProxy = 'HAProxy',
  Apache_Pig = 'Apache Pig',
  Chef = 'Chef',
  Vagrant = 'Vagrant',
  //#endregion

  Git = 'Git',

  //#region Automation
  Ansible = 'Ansible',
  CMake = 'CMake',
  Grunt = 'Grunt',
  pug = 'pug',
  //#endregion Automation

  InfluxData = 'InfluxData',
  Jekyll = 'Jekyll',
  Julia = 'Julia',
  matplotlib = 'matplotlib',
  Nim = 'Nim',
  NumPy = 'NumPy',
  OCaml = 'OCaml',
  Padrino = 'Padrino',
  pandas = 'pandas',
  Perl = 'Perl',
  Phalcon = 'Phalcon',
  Phaser = 'Phaser',
  Phoenix = 'Phoenix',
  pony = 'pony',
  Pygame = 'Pygame',
  PyTorch = 'PyTorch',
  Q = 'Q',
  Qt = 'Qt',
  Ramda = 'Ramda',
  Terraform = 'Terraform',
  Twig = 'Twig',
  Vulkan = 'Vulkan',
}
