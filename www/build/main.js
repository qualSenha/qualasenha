webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
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
            selector: 'page-home-sg',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home-sg\home-sg.html"*/'<ion-header>\n\n  <ion-navbar transparent style="background-color: #FF0000">\n\n    <ion-title><span>Home</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n  <ion-card-content style=" background-color: #9C9C9C">\n\n  <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n\n    Senhas Chamadas<br>\n\n\n\n  </ion-list>\n\n</ion-card-content>\n\n\n\n<ion-card color="roxo">\n\n  <ion-card-content style="background-color: #D8D8D8;text-align: center; font-size: 30px">\n\n    <ion-list >\n\n      Sua Senha:\n\n    <ion-item-sliding>\n\n\n\n      <ion-item>\n\n\n\n        <h2 style="color: #000000; font-size: 30px; text-align: center">6</h2>\n\n      </ion-item>\n\n\n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger" (click)="openCancelar()" >\n\n          Cancelar\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px; background-color: #D8D8D8">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">Senha</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">Guiche</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">1</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">02</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">5</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">03</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">A69</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">04</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home-sg\home-sg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomeSgPage);
    return HomeSgPage;
}());

//# sourceMappingURL=home-sg.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__ = __webpack_require__(40);
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
    function LoginPage(toast, navCtrl, navParams, alertCtrl, servidor, http) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.servidor = servidor;
        this.http = http;
        this.model = new Usuario();
    }
    LoginPage.prototype.entrar = function (dados, campus) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], {
            model: dados,
            campus: campus
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.getUsuario = function () {
        var _this = this;
        this.servidor.getUsuario(this.model)
            .then(function (result) {
            if (result) {
                _this.entrar(result, _this.model.localAtendimento);
            }
            else {
                _this.toast.create({ message: 'Usuário incorreto', position: 'botton', duration: 3000 }).present();
            }
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000 }).present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\login\login.html"*/'<ion-content padding>\n\n\n\n\n\n  <img src="assets/imgs/original.png"/>\n\n\n\n\n\n  <ion-card>\n\n	  <ion-item style="background-color: #A4A4A4">\n\n	    <ion-label  style="color: #FFFFFF" stacked>R.A.</ion-label>\n\n	   	<ion-input  style="color:#000000"  type="text" [(ngModel)]="model.ra"></ion-input>\n\n	  </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n	  <ion-item style="background-color: #A4A4A4">\n\n	    <ion-label style="color: #FFFFFF" stacked>Senha</ion-label>	\n\n	    <ion-input style="color:#000000" type="password" [(ngModel)]="model.senha"></ion-input>\n\n	  </ion-item>\n\n  </ion-card>\n\n\n\n    <ion-card>\n\n    <ion-item style="background-color: #A4A4A4" >\n\n      <ion-label style="color: #FFFFFF">Local de Atendimento</ion-label>\n\n        <ion-select [(ngModel)]="model.localAtendimento">\n\n          <ion-option value="atendimentoBrigadeiro">Brigadeiro</ion-option>\n\n          <ion-option value="atendimentoLiberdade">Liberdade</ion-option>\n\n          <ion-option value="atendimentoMorumbi">Morumbi</ion-option>\n\n          <ion-option value="atendimentoSantoAmaro">Santo Amaro</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n    <ion-card-content style="text-align: center; font-size: 30px">\n\n      <ion-list>\n\n            <h1> \n\n              <button style="background-color: #FF0000" ion-button large full (click)="getUsuario()" round>ENTRAR</button>\n\n            </h1>\n\n      </ion-list>\n\n    </ion-card-content>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-sg/home-sg.module": [
		275,
		1
	],
	"../pages/login/login.module": [
		276,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* unused harmony export Usuarios */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
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
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.model = new Usuarios();
        this.model = navParams.get('model');
        this.model.localAtendimento = navParams.get('campus');
    }
    TabsPage.prototype.ionViewDidEnter = function () { };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n\n  <ion-tab [root]="tab1Root" [rootParams]="model" tabTitle="Senhas" tabIcon="time" color="dark" ></ion-tab>\n\n  <ion-tab [root]="tab2Root" [rootParams]="model" tabTitle="Agendar" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab3Root" [rootParams]="model" tabTitle="Configurações" tabIcon="settings"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

var Usuarios = /** @class */ (function () {
    function Usuarios() {
    }
    return Usuarios;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(40);
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
    function AboutPage(navCtrl, navParams, servidor, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servidor = servidor;
        this.toast = toast;
        this.model = new Usuario();
        this.model.ra = navParams.data.ra;
        console.log('gerar', navParams.data);
    }
    AboutPage.prototype.openAgendar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__["a" /* HomeSgPage */]);
    };
    AboutPage.prototype.gerarSenha = function () {
        var _this = this;
        this.servidor.gerarSenha(this.model.ra, true)
            .then(function (result) {
            if (result) {
                _this.model.senha = result.ID;
            }
            console.log(result);
        })
            .catch(function (error) {
            _this.toast.create({
                message: 'Falha no sistema',
                position: 'botton',
                duration: 3000
            }).present();
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar transparent style="background-color: #FF0000">\n\n    <ion-title><span>Agendamento</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  <ion-card>\n\n    <ion-card-content style=" background-color: #9C9C9C">\n\n      <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n\n      Dados Agendamento<br>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n  <ion-card-content style="text-align: left; font-size: 30px">\n\n    <ion-item>\n\n      <ion-label>Local</ion-label>\n\n        <ion-select [(ngModel)]="a">\n\n          <ion-option value="campusLiberdade">Liberdade</ion-option>\n\n          <ion-option value="campusBrigadeiro">Brigadeiro</ion-option>\n\n          <ion-option value="campusMorumbi">Morumbi</ion-option>\n\n          <ion-option value="campusSantoAmaro">Santo Amaro</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-card-content>  \n\n\n\n  <ion-card-content style="text-align: left; font-size: 30px">\n\n    <ion-item>\n\n      <ion-label>Solicitação</ion-label>\n\n        <ion-select [(ngModel)]="a">\n\n          <ion-option value="financeiro">Financeiro</ion-option>\n\n          <ion-option value="matricula">Matricula</ion-option>\n\n          <ion-option value="DP/ADAP">Disciplinas, Eletivas, DP e ADAP</ion-option>\n\n          <ion-option value="estagio">Estagio</ion-option>\n\n          <ion-option value="outros">Outros Serviços</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content style="text-align: left; font-size: 30px">\n\n    <ion-item>\n\n      <ion-label>Dia</ion-label>\n\n      <ion-datetime displayFormat="DD:HH" [(ngModel)]="a"></ion-datetime>\n\n    </ion-item>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content style="text-align: left; font-size: 30px">\n\n    <ion-item>\n\n      <ion-label>Hora</ion-label>\n\n      <ion-datetime displayFormat="HH" [(ngModel)]="a"></ion-datetime>\n\n    </ion-item> \n\n  </ion-card-content>\n\n\n\n   <!-- <ion-card-content style=" background-color: #9C9C9C;text-align: center; font-size: 30px">\n\n      <ion-list style="color: #FFFFFF">\n\n        Opções\n\n      </ion-list>\n\n    </ion-card-content>\n\n\n\n    <ion-card-content style="text-align: left; font-size: 30px">\n\n      <ion-item-sliding>\n\n        <ion-item>\n\n          <ion-label>Notificar Quando faltar</ion-label>\n\n          <ion-select [(ngModel)]="a">\n\n            <ion-option value="1Senha">1 Senha</ion-option>\n\n            <ion-option value="2Senhas">2 Senhas</ion-option>\n\n            <ion-option value="5Senhas">5 Senhas</ion-option>\n\n            <ion-option value="10Senhas">10 Senhas</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-item-sliding>\n\n    </ion-card-content>\n\n  -->\n\n  <ion-card-content>\n\n    <button ion-button block large color="danger" (click)="gerarSenha()" round outline>Agendar</button>\n\n  </ion-card-content>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(40);
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
    function ContactPage(navCtrl, navParams, servidor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servidor = servidor;
        this.model = new Usuario();
        this.model = navParams.data;
    }
    ContactPage.prototype.getRetornar = function () {
        var _this = this;
        this.servidor.getConfiguracoes(this.model)
            .then(function (result) {
            /* this.model.ra = result[0].ra;
            this.model.senha = result[0].senha; */
            console.log(result);
            for (var i = 0; i < result.length; i++) {
                var aluno = result[i];
                _this.alunos.push(aluno);
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ContactPage.prototype.ionViewDidEnter = function () {
        //console.log(this.model)
        this.alunos = [];
        this.getRetornar();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar transparent style="background-color: #FF0000">\n\n    <ion-title><span>Configurações</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n    <ion-card-content style=" background-color: #9C9C9C">\n\n      <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n\n        Dados Pessoais\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n    <ion-card-content style="text-align: left; font-size: 30px">\n\n      <ion-item *ngFor="let aluno of alunos">\n\n       <ion-label>Nome Completo: {{ aluno.nome }}</ion-label> \n\n      </ion-item>\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content style="text-align: left; font-size: 30px">\n\n      <ion-item *ngFor="let aluno of alunos">\n\n        <ion-label>CPF: {{ aluno.cpf }}</ion-label>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content style="text-align: left; font-size: 30px">\n\n      <ion-item *ngFor="let aluno of alunos">\n\n        <ion-label>E-mail: {{ aluno.email }}</ion-label>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content style="text-align: left; font-size: 30px">\n\n      <ion-item *ngFor="let aluno of alunos">\n\n        <ion-label>Data de Nascimento: {{ aluno.dataNascimento | date: "dd/MM/yyyy" }}</ion-label>\n\n      </ion-item>\n\n    </ion-card-content>\n\n \n\n    <ion-card-content style="text-align: left; font-size: 30px">\n\n      <ion-item *ngFor="let aluno of alunos">\n\n        <ion-label>Telefone: {{ aluno.telefone }}</ion-label>\n\n      </ion-item>\n\n    </ion-card-content> \n\n\n\n  <!--<ion-card-content>\n\n    <button ion-button block large color="danger" onclick="alert(\'Configurações Atulizadas Com Sucesso\')"outline round >Atualizar</button>\n\n  </ion-card-content>-->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */]])
    ], ContactPage);
    return ContactPage;
}());

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(103);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__["a" /* HomeSgPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-sg/home-sg.module#HomeSgPageModule', name: 'HomeSgPage', segment: 'home-sg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__["a" /* HomeSgPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
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

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServidorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
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
        this.url = "http://4d3b1202.ngrok.io";
        console.log('Hello ServidorProvider Provider');
    }
    ServidorProvider.prototype.getUsuario = function (model) {
        var _this = this;
        var body = { "ra": model.ra, "senha": model.senha };
        var link = this.url + "/usuario";
        return new Promise(function (resolve, reject) {
            _this.http.post(link, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.getConfiguracoes = function (model) {
        var _this = this;
        var link = this.url + "/usuario?ra=" + model.ra + "&senha=" + model.senha;
        return new Promise(function (resolve, reject) {
            _this.http.get(link)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.getSenhasMorumbi = function () {
        var _this = this;
        var link = this.url + "/senhasMorumbi";
        return new Promise(function (resolve, reject) {
            _this.http.get(link)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.getSenhas = function (local) {
        var _this = this;
        var link = this.url + "/senhas?local=" + local;
        return new Promise(function (resolve, reject) {
            _this.http.get(link)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.gerarSenha = function (ra, agendada) {
        var _this = this;
        var link = this.url + "/senha";
        var body = { "ra": ra, "agendada": agendada };
        return new Promise(function (resolve, reject) {
            _this.http.post(link, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.cancelar = function (id) {
        var _this = this;
        var link = this.url + "/cancelar";
        var body = { "id": id };
        return new Promise(function (resolve, reject) {
            _this.http.post(link, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.getSenhaGerada = function (ra) {
        var _this = this;
        var link = this.url + "/senhaGerada?ra=" + ra;
        return new Promise(function (resolve, reject) {
            _this.http.get(link)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServidorProvider);
    return ServidorProvider;
}());

//# sourceMappingURL=servidor.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(40);
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
    function HomePage(toast, navCtrl, alertCtrl, servidor, navParams) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.servidor = servidor;
        this.navParams = navParams;
        this.model = new Usuario();
        this.model.senha = navParams.data.senhaAtendimento;
        this.model.ra = navParams.data.ra;
        this.model.localAtendimento = navParams.data.localAtendimento;
    }
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Senha gerada com sucesso!',
            buttons: ['OK'],
        });
        alert.present();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.senhas = [];
        this.getSenhasMorumbi();
        //this.getSenha()
    };
    HomePage.prototype.getSenhasMorumbi = function () {
        var _this = this;
        this.servidor.getSenhasMorumbi()
            .then(function (result) {
            if (result) {
                for (var i = 0; i < result.length; i++) {
                    var senha = result[i];
                    _this.senhas.push(senha);
                }
                _this.getSenha();
            }
            else {
                _this.toast.create({ message: 'Usuário incorreto', position: 'botton', duration: 3000 }).present();
            }
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000 }).present();
        });
    };
    HomePage.prototype.getSenhas = function () {
        var _this = this;
        this.servidor.getSenhas(this.model.localAtendimento)
            .then(function (result) {
            console.log(result);
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000 }).present();
        });
    };
    HomePage.prototype.gerarSenha = function () {
        var _this = this;
        this.servidor.gerarSenha(this.model.ra, false)
            .then(function (result) {
            if (result) {
                _this.model.senha = result.ID;
            }
            console.log(result);
        })
            .catch(function (error) {
            _this.toast.create({
                message: 'Falha no sistema',
                position: 'botton',
                duration: 3000
            }).present();
        });
    };
    HomePage.prototype.cancelarSenha = function () {
        var _this = this;
        this.servidor.cancelar(this.model.senha)
            .then(function (result) {
            if (result) {
                _this.model.senha = false;
            }
        })
            .catch(function (error) {
            _this.toast.create({
                message: 'Falha no sistema',
                position: 'botton',
                duration: 3000
            }).present();
        });
    };
    HomePage.prototype.getSenha = function () {
        var _this = this;
        this.servidor.getSenhaGerada(this.model.ra)
            .then(function (result) {
            if (result.senha) {
                _this.model.senha = result.senha;
            }
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000 }).present();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar transparent style="background-color: #FF0000">\n\n    <ion-title><span>Home</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content style=" background-color: #9C9C9C" *ngIf="!model.senha">\n\n      <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n\n        Atendimento Morumbi<br>\n\n      </ion-list>\n\n    </ion-card-content>\n\n    \n\n      <ion-card-content style="background-color: #D8D8D8;text-align: center; font-size: 30px "*ngIf="model.senha">\n\n        <ion-list>\n\n            Sua Senha:\n\n          <ion-item-sliding>        \n\n            <ion-item>        \n\n                <h2 style="color: #000000; font-size: 30px; text-align: center">{{model.senha}}</h2>\n\n            </ion-item>        \n\n              <ion-item-options side="left">\n\n                <button ion-button color="danger" (click)="cancelarSenha()" >\n\n                  Cancelar\n\n                  <ion-icon name="trash"></ion-icon>\n\n                </button>\n\n              </ion-item-options>        \n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-card-content>    \n\n\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-content style="font-size: 30px; background-color: #D8D8D8">\n\n      <ion-row>\n\n        <ion-col col-4 style="text-align: center;">Senha</ion-col>\n\n        <ion-col style="text-align: center;">| </ion-col>\n\n        <ion-col style="text-align: center;">Guiche</ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card-content style="font-size: 30px" *ngFor="let senha of senhas">\n\n    <ion-row>\n\n      <ion-col col-4 style="text-align: center;">{{ senha.ID }}</ion-col>\n\n      <ion-col style="text-align: center;">| </ion-col>\n\n      <ion-col style="text-align: center;">01</ion-col>\n\n    </ion-row>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content>\n\n    <button ion-button block large (click)="showAlert();gerarSenha()" color="danger" round outline>Gerar Senha\n\n    </button>\n\n  </ion-card-content>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map