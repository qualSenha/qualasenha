webpackJsonp([2],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_servidor_servidor__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, servidor, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.servidor = servidor;
        this.http = http;
    }
    LoginPage.prototype.Login = function () {
        var _this = this;
        if (this.ra == undefined || this.senha == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: "Atenção",
                message: "Preencha todos os dados",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.http.get(this.servidor.urlGet() + 'login.php?ra=' + this.ra + '&senha=' + this.senha).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res.json(); }))
                .subscribe(function (dados) {
                if (dados.msg.logado == "sim") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: "Atenção",
                        message: "Usuario ou senha invalido",
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\login\login.html"*/'<ion-content padding>\n\n\n  <img src="assets/imgs/logo.png"/>\n\n\n  <ion-card>\n	  <ion-item style="background-color: #696969">\n	    <ion-label  style="color: #9C9C9C" stacked>R.A</ion-label>\n	   	<ion-input  style="color:#FFFFFF"  type="text"[(ngModel)]="ra"></ion-input>\n	  </ion-item>\n  </ion-card>\n\n  <ion-card>\n	  <ion-item style="background-color: #696969">\n	    <ion-label style="color: #9C9C9C" stacked>Senha</ion-label>	\n	    <ion-input style="color:#FFFFFF " type="password"[(ngModel)]="senha"></ion-input>\n	  </ion-item>\n  </ion-card>\n\n    <ion-card-content style="text-align: center; font-size: 30px">\n      <ion-list>\n        <ion-item-sliding>\n          <ion-item style="background-color: #424242">\n            <h1> \n              <button style="background-color: #FF0000" ion-button large full (click)="Login()" round>ENTRAR</button>\n            </h1>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-sg/home-sg.module": [
		403,
		1
	],
	"../pages/login/login.module": [
		404,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Senhas" tabIcon="time" color="dark" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Agendar" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Configurações" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.openAgendar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__["a" /* HomeSgPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Agendamento</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n    <ion-card-content style=" background-color: #424242">\n      <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n      Dados Agendamento<br>\n      </ion-list>\n    </ion-card-content>\n\n  <ion-card-content style="text-align: left; font-size: 30px">\n    <ion-item>\n      <ion-label>Local</ion-label>\n        <ion-select [(ngModel)]="a">\n          <ion-option value="campusLiberdade">Liberdade</ion-option>\n          <ion-option value="campusBrigadeiro">Brigadeiro</ion-option>\n          <ion-option value="campusMorumbi">Morumbi</ion-option>\n          <ion-option value="campusSantoAmaro">Santo Amaro</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-card-content>  \n\n  <ion-card-content style="text-align: left; font-size: 30px">\n    <ion-item>\n      <ion-label>Solicitação</ion-label>\n        <ion-select [(ngModel)]="a">\n          <ion-option value="financeiro">Financeiro</ion-option>\n          <ion-option value="matricula">Matricula</ion-option>\n          <ion-option value="DP/ADAP">Disciplinas, Eletivas, DP e ADAP</ion-option>\n          <ion-option value="estagio">Estagio</ion-option>\n          <ion-option value="outros">Outros Serviços</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-card-content>\n\n  <ion-card-content style="text-align: left; font-size: 30px">\n    <ion-item>\n      <ion-label>Dia</ion-label>\n      <ion-datetime displayFormat="DD:HH" [(ngModel)]="a"></ion-datetime>\n    </ion-item>\n  </ion-card-content>\n\n  <ion-card-content style="text-align: left; font-size: 30px">\n    <ion-item>\n      <ion-label>Hora</ion-label>\n      <ion-datetime displayFormat="HH" [(ngModel)]="a"></ion-datetime>\n    </ion-item> \n  </ion-card-content>\n\n    <ion-card-content style=" background-color: #424242;text-align: center; font-size: 30px">\n      <ion-list style="color: #FFFFFF">\n        Opções\n      </ion-list>\n    </ion-card-content>\n\n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item-sliding>\n        <ion-item>\n          <ion-label>Notificar Quando faltar</ion-label>\n          <ion-select [(ngModel)]="a">\n            <ion-option value="1Senha">1 Senha</ion-option>\n            <ion-option value="2Senhas">2 Senhas</ion-option>\n            <ion-option value="5Senhas">5 Senhas</ion-option>\n            <ion-option value="10Senhas">10 Senhas</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-card-content>\n\n  <ion-card-content>\n    <button ion-button block large color="danger" (click)="openAgendar()" round outline>Agendar</button>\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, servidor) {
        this.navCtrl = navCtrl;
        this.servidor = servidor;
        this.getRetornar();
    }
    ContactPage.prototype.getRetornar = function () {
        var _this = this;
        this.servidor.getPegar()
            .subscribe(function (data) { return _this.alunos = data; }, function (err) { return console.log(err); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Configurações</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card-content style=" background-color: #424242">\n      <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n        Dados Pessoais\n      </ion-list>\n    </ion-card-content>\n\n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item *ngFor="let aluno of alunos">\n       <ion-label>Nome Completo: {{ aluno.nome }}</ion-label> \n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item *ngFor="let aluno of alunos">\n        <ion-label>CPF: {{ aluno.cpf }}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item *ngFor="let aluno of alunos">\n        <ion-label>E-mail: {{ aluno.email }}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item *ngFor="let aluno of alunos">\n        <ion-label>Data de Nascimento: {{ aluno.data }}</ion-label>\n      </ion-item>\n    </ion-card-content>\n \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item *ngFor="let aluno of alunos">\n        <ion-label>Telefone: {{ aluno.telefone }}</ion-label>\n      </ion-item>\n    </ion-card-content> \n\n  <ion-card-content>\n    <button ion-button block large color="danger" onclick="alert(\'Configurações Atulizadas Com Sucesso\')"outline round >Atualizar</button>\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_sg_home_sg__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_sg_home_sg__["a" /* HomeSgPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-sg/home-sg.module#HomeSgPageModule', name: 'HomeSgPage', segment: 'home-sg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_sg_home_sg__["a" /* HomeSgPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__["a" /* ServidorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomeSgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeSgPage = /** @class */ (function () {
    function HomeSgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeSgPage.prototype.openCancelar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HomeSgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeSgPage');
    };
    HomeSgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-sg',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home-sg\home-sg.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Home</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-card-content style=" background-color: #424242">\n  <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n    Senhas Chamadas<br>\n\n  </ion-list>\n</ion-card-content>\n\n<ion-card color="roxo">\n  <ion-card-content style="background-color: #424242;text-align: center; font-size: 30px">\n    <ion-list >\n      Sua Senha:\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <h2 style="color: #000000; font-size: 30px; text-align: center">6</h2>\n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="danger" (click)="openCancelar()" >\n          Cancelar\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">Senha</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">Guiche</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">1</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">02</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">5</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">03</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">A69</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">04</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home-sg\home-sg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomeSgPage);
    return HomeSgPage;
}());

//# sourceMappingURL=home-sg.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Senha gerada com sucesso!',
            buttons: ['OK'],
        });
        alert.present();
    };
    HomePage.prototype.openGerar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__["a" /* HomeSgPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Home</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card-content style=" background-color: #424242">\n  <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n    Senhas Chamadas<br>\n  </ion-list>\n</ion-card-content>\n\n\n<ion-card>\n  <ion-card-content style="font-size: 30px; background-color: #9C9C9C">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">Senha</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">Guiche</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">1</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">01</ion-col>\n  </ion-row>\n  </ion-card-content>\n\n\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">5</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">02</ion-col>\n  </ion-row>\n  </ion-card-content>\n\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">A69</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">03</ion-col>\n  </ion-row>\n  </ion-card-content>\n\n\n\n\n  <ion-card-content>\n          <button ion-button block large  (click)="showAlert();openGerar()" color="danger" round outline>Gerar Senha\n          </button>\n</ion-card-content>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServidorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServidorProvider = /** @class */ (function () {
    function ServidorProvider(http) {
        this.http = http;
        this.url = "http://localhost/usuario/";
        console.log('Hello ServidorProvider Provider');
    }
    ServidorProvider.prototype.urlGet = function () {
        return this.url;
    };
    ServidorProvider.prototype.getPegar = function () {
        return this.http.get(this.url + 'dados.php').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ServidorProvider);
    return ServidorProvider;
    var _a;
}());

//# sourceMappingURL=servidor.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.js.map