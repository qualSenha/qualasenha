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
            selector: 'page-home-sg',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/home-sg/home-sg.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Home</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-card-content style=" background-color: #9C9C9C">\n  <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n    Senhas Chamadas<br>\n\n  </ion-list>\n</ion-card-content>\n\n<ion-card color="roxo">\n  <ion-card-content style="background-color: #D8D8D8;text-align: center; font-size: 30px">\n    <ion-list >\n      Sua Senha:\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <h2 style="color: #000000; font-size: 30px; text-align: center">6</h2>\n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="danger" (click)="openCancelar()" >\n          Cancelar\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n  <ion-card-content style="font-size: 30px; background-color: #D8D8D8">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">Senha</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">Guiche</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">1</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">02</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">5</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">03</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">A69</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">04</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/home-sg/home-sg.html"*/,
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
        if (this.model.ra == undefined || this.model.senha == undefined || this.model.localAtendimento == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'ERRO!',
                subTitle: 'Preencha todos os campos!',
                buttons: ['OK'],
            });
            alert_1.present();
        }
        else {
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
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/login/login.html"*/'<ion-content padding>\n\n\n  <img src="assets/imgs/original.png"/>\n\n\n  <ion-card>\n	  <ion-item style="background-color: #A4A4A4">\n	    <ion-label  style="color: #FFFFFF" stacked>R.A.</ion-label>\n	   	<ion-input  style="color:#000000"  type="text" [(ngModel)]="model.ra"></ion-input>\n	  </ion-item>\n  </ion-card>\n\n  <ion-card>\n	  <ion-item style="background-color: #A4A4A4">\n	    <ion-label style="color: #FFFFFF" stacked>Senha</ion-label>	\n	    <ion-input style="color:#000000" type="password" [(ngModel)]="model.senha"></ion-input>\n	  </ion-item>\n  </ion-card>\n\n    <ion-card>\n    <ion-item style="background-color: #A4A4A4" >\n      <ion-label style="color: #FFFFFF">Local de Atendimento</ion-label>\n        <ion-select [(ngModel)]="model.localAtendimento">\n          <ion-option value="bri">Brigadeiro</ion-option>\n          <ion-option value="lib">Liberdade</ion-option>\n          <ion-option value="mor">Morumbi</ion-option>\n          <ion-option value="san">Santo Amaro</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-card>\n\n    <ion-card-content style="text-align: center; font-size: 30px">\n      <ion-list>\n            <h1> \n              <button style="background-color: #FF0000" ion-button large full (click)="getUsuario()" round>ENTRAR</button>\n            </h1>\n      </ion-list>\n    </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/login/login.html"*/,
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
    TabsPage.prototype.ionViewDidEnter = function () {
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/tabs/tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" [rootParams]="model" tabTitle="Senhas" tabIcon="time" color="dark" ></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="model" tabTitle="Agendar" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" [rootParams]="model" tabTitle="Configurações" tabIcon="settings"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/tabs/tabs.html"*/
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
    function AboutPage(navCtrl, navParams, servidor, alertCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servidor = servidor;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.model = new Usuario();
        this.model.ra = navParams.data.ra;
        this.model.localAtendimento = navParams.data.localAtendimento;
    }
    AboutPage.prototype.openAgendar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__["a" /* HomeSgPage */]);
    };
    AboutPage.prototype.gerarSenha = function () {
        var _this = this;
        this.servidor.gerarSenha(this.model, true)
            .then(function (result) {
            if (result) {
                _this.navParams.data.senhaAtendimento = result.ID;
                _this.showAlert(result.ID);
                //this.navCtrl.push('HomePage')
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
    AboutPage.prototype.showAlert = function (senha) {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: "Sua senha agendada \u00E9: " + senha,
            buttons: ['OK'],
        });
        alert.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Agendamento</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-card>\n    <ion-card-content style=" background-color: #D8D8D8">\n      <ion-list style="color: #000;font-size: 30px; text-align: center">\n      Dados Agendamento<br>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card-content style="text-align: left; font-size: 30px">\n    <ion-item>\n      <ion-label>Local</ion-label>\n        <ion-select [(ngModel)]="model.localAtendimento">\n          <ion-option value="campusLiberdade">Liberdade</ion-option>\n          <ion-option value="campusBrigadeiro">Brigadeiro</ion-option>\n          <ion-option value="campusMorumbi">Morumbi</ion-option>\n          <ion-option value="campusSantoAmaro">Santo Amaro</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-card-content>  \n\n  <ion-card-content style="text-align: left; font-size: 30px">\n    <ion-item>\n      <ion-label>Solicitação</ion-label>\n        <ion-select [(ngModel)]="solicitacao">\n          <ion-option value="financeiro">Financeiro</ion-option>\n          <ion-option value="matricula">Matricula</ion-option>\n          <ion-option value="DP/ADAP">Disciplinas, Eletivas, DP e ADAP</ion-option>\n          <ion-option value="estagio">Estagio</ion-option>\n          <ion-option value="outros">Outros Serviços</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-card-content>\n\n  <ion-card-content style="text-align: left; font-size: 30px">\n    <ion-item>\n      <ion-label>Dia</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n    </ion-item>\n  </ion-card-content>\n\n  <ion-card-content style="text-align: left; font-size: 30px">\n    <ion-item>\n      <ion-label>Hora</ion-label>\n      <ion-datetime displayFormat="HH:mm" [(ngModel)]="hora"></ion-datetime>\n    </ion-item> \n  </ion-card-content>\n\n   <!-- <ion-card-content style=" background-color: #9C9C9C;text-align: center; font-size: 30px">\n      <ion-list style="color: #FFFFFF">\n        Opções\n      </ion-list>\n    </ion-card-content>\n\n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item-sliding>\n        <ion-item>\n          <ion-label>Notificar Quando faltar</ion-label>\n          <ion-select [(ngModel)]="a">\n            <ion-option value="1Senha">1 Senha</ion-option>\n            <ion-option value="2Senhas">2 Senhas</ion-option>\n            <ion-option value="5Senhas">5 Senhas</ion-option>\n            <ion-option value="10Senhas">10 Senhas</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-card-content>\n  -->\n  <ion-card-content>\n    <button ion-button block large color="danger" (click)="gerarSenha()" round outline>Agendar</button>\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
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
            _this.model.nome = result.nome;
            _this.model.email = result.email;
            _this.model.dtNascimento = result.dataNascimento;
            _this.model.telefone = result.telefone;
            _this.model.cpf = result.cpf;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ContactPage.prototype.ionViewDidEnter = function () {
        this.alunos = [];
        this.getRetornar();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Configurações</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n    <ion-card-content style=" background-color: #D8D8D8">\n      <ion-list style="color: #000;font-size: 30px; text-align: center">\n        Dados Pessoais\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n       <ion-label>Nome Completo: {{ model.nome }}</ion-label> \n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n        <ion-label>CPF: {{ model.cpf }}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n        <ion-label>E-mail: {{ model.email }} </ion-label>\n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n        <ion-label>Data de Nascimento: {{ model.dataNascimento | date: "dd/MM/yyyy" }}</ion-label>\n      </ion-item>\n    </ion-card-content>\n \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n        <ion-label>Telefone: {{ model.telefone }} </ion-label>\n      </ion-item>\n    </ion-card-content> \n\n  <!--<ion-card-content>\n    <button ion-button block large color="danger" onclick="alert(\'Configurações Atulizadas Com Sucesso\')"outline round >Atualizar</button>\n  </ion-card-content>-->\n\n</ion-content>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/contact/contact.html"*/
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/app/app.html"*/
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
        //private url = "http://localhost:8880";
        this.url = "http://a97d0690.ngrok.io";
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
    ServidorProvider.prototype.gerarSenha = function (model, agendada) {
        var _this = this;
        var link = this.url + "/senha";
        var body = { "ra": model.ra, "agendada": agendada, "local": model.localAtendimento };
        return new Promise(function (resolve, reject) {
            _this.http.post(link, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.cancelar = function (id, local) {
        var _this = this;
        var link = this.url + "/cancelar";
        var body = { "id": id, "local": local };
        return new Promise(function (resolve, reject) {
            _this.http.post(link, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.getSenhaGerada = function (ra, local) {
        var _this = this;
        var link = this.url + "/senhaGerada?ra=" + ra + "&local=" + local;
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ServidorProvider);
    return ServidorProvider;
    var _a;
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
        this.getSenhas();
    };
    HomePage.prototype.getSenhas = function () {
        var _this = this;
        this.servidor.getSenhas(this.model.localAtendimento)
            .then(function (result) {
            _this.getSenha();
            for (var i = 0; i < result.length; i++) {
                var senha = result[i];
                _this.senhas.push(senha);
            }
            if (_this.model.localAtendimento === 'bri') {
                _this.model.local = 'Atendimento Brigadeiro';
            }
            else if (_this.model.localAtendimento === 'san') {
                _this.model.local = 'Atendimento Santo Amaro';
            }
            else if (_this.model.localAtendimento === 'lib') {
                _this.model.local = 'Atendimento Liberdade';
            }
            else {
                _this.model.local = 'Atendimento Morumbi';
            }
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000 }).present();
        });
    };
    HomePage.prototype.gerarSenha = function () {
        var _this = this;
        this.servidor.gerarSenha(this.model, false)
            .then(function (result) {
            if (result) {
                _this.model.senha = result.ID;
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
    HomePage.prototype.cancelarSenha = function () {
        var _this = this;
        this.servidor.cancelar(this.model.senha, this.model.localAtendimento)
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
        this.servidor.getSenhaGerada(this.model.ra, this.model.localAtendimento)
            .then(function (result) {
            if (result.senha) {
                _this.model.senha = result.senha;
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Home</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content style=" background-color: #D8D8D8" *ngIf="!model.senha">\n      <ion-list style="color: #000;font-size: 30px; text-align: center">\n        {{model.local}}<br>\n      </ion-list>\n    </ion-card-content>\n\n    <ion-card-content style="background-color: #D8D8D8;text-align: center; font-size: 30px " *ngIf="model.senha">\n      <ion-list>\n        Sua Senha:\n        <ion-item-sliding>\n          <ion-item>\n            <h2 style="color: #000000; font-size: 30px; text-align: center">{{model.senha}}</h2>\n          </ion-item>\n          <ion-item-options side="left">\n            <button ion-button color="danger" (click)="cancelarSenha()">\n              Cancelar\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card>\n    <ion-card-content style="font-size: 30px; background-color: #D8D8D8">\n      <ion-row>\n        <ion-col col-4 style="text-align: center;">Senha</ion-col>\n        <ion-col style="text-align: center;">| </ion-col>\n        <ion-col style="text-align: center;">Guiche</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card-content style="font-size: 30px" *ngFor="let senha of senhas">\n    <ion-row>\n      <ion-col col-4 style="text-align: center;">{{ senha.ID }}</ion-col>\n      <ion-col style="text-align: center;">| </ion-col>\n      <ion-col style="text-align: center;">{{ senha.guiche }}</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n  <ion-card-content>\n    <button ion-button block large (click)="showAlert();gerarSenha()" color="danger" round outline [disabled]="model.senha">\n      Gerar Senha\n    </button>\n  </ion-card-content>\n\n\n</ion-content>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/projeto/qualasenha/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
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