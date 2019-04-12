webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-sg/home-sg.module": [
		276,
		0
	],
	"../pages/login/login.module": [
		152
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toast, servidorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.servidorProvider = servidorProvider;
        this.model = new User();
        this.model.ra = '';
        this.model.password = '';
    }
    LoginPage.prototype.Login = function () {
        var _this = this;
        this.servidorProvider.login(this.model.ra, this.model.password)
            .then(function (result) {
            _this.toast.create({ message: 'Usuário logado com sucesso.', position: 'botton', duration: 3000 }).present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\login\login.html"*/'<ion-content padding>\n\n\n  <img src="assets/imgs/logo.png"/>\n\n\n  <ion-card>\n	  <ion-item style="background-color: #696969">\n	    <ion-label  style="color: #9C9C9C" stacked>R.A</ion-label>\n	   	<ion-input  style="color:#FFFFFF" type="text"></ion-input>\n	  </ion-item>\n  </ion-card>\n\n  <ion-card>\n	  <ion-item style="background-color: #696969">\n	    <ion-label style="color: #9C9C9C" stacked>Senha</ion-label>	\n	    <ion-input style="color:#FFFFFF " type="password"></ion-input>\n	  </ion-item>\n  </ion-card>\n\n    <ion-card-content style="text-align: center; font-size: 30px">\n      <ion-list>\n        <ion-item-sliding>\n          <ion-item style="background-color: #424242">\n            <h1> \n              <button style="background-color: #FF0000" ion-button large full (click)="Login()" round>ENTRAR</button>\n            </h1>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        this.navCtrl.push('HomeSgPage');
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Configurações</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card-content style=" background-color: #424242">\n      <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n        Dados Pessoais\n      </ion-list>\n    </ion-card-content>\n\n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n       <ion-label>Nome Completo:</ion-label>    \n       <ion-input type="text"></ion-input>     \n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n        <ion-label>CPF:</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n        <ion-label>E-mail</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n        <ion-label>Data de Nascimento:</ion-label>\n        <ion-input type="date"></ion-input>\n      </ion-item>\n    </ion-card-content>\n \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n        <ion-label>Telefone:</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-card-content> \n\n  <ion-card-content>\n    <button ion-button block large color="danger" onclick="alert(\'Configurações Atulizadas Com Sucesso\')"outline round >Atualizar</button>\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_servidor_servidor__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(199);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-sg/home-sg.module#HomeSgPageModule', name: 'HomeSgPage', segment: 'home-sg', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_servidor_servidor__["a" /* ServidorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(153);
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

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(99);
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServidorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServidorProvider = /** @class */ (function () {
    function ServidorProvider(http) {
        this.http = http;
        this.url = '';
    }
    ServidorProvider.prototype.login = function (ra, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                ra: ra,
                password: password
            };
            _this.http.post(_this.url + 'login', data)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ServidorProvider);
    return ServidorProvider;
    var _a;
}());

//# sourceMappingURL=servidor.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        this.navCtrl.push('HomeSgPage');
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

/***/ })

},[200]);
//# sourceMappingURL=main.js.map