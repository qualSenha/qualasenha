webpackJsonp([0],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSgPageModule", function() { return HomeSgPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_sg__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeSgPageModule = /** @class */ (function () {
    function HomeSgPageModule() {
    }
    HomeSgPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_sg__["a" /* HomeSgPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_sg__["a" /* HomeSgPage */]),
            ],
        })
    ], HomeSgPageModule);
    return HomeSgPageModule;
}());

//# sourceMappingURL=home-sg.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(99);
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
            selector: 'page-home-sg',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home-sg\home-sg.html"*/'<ion-header>\n\n  <ion-navbar transparent style="background-color: #FF0000">\n\n    <ion-title><span>Home</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n  <ion-card-content style=" background-color: #424242">\n\n  <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n\n    Senhas Chamadas<br>\n\n\n\n  </ion-list>\n\n</ion-card-content>\n\n\n\n\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: left;">Senha</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">Guiche</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">1</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">02</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="text-align: center; font-size: 30px">\n\n    3\n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n<ion-card>\n\n  <ion-card-content style="text-align: center; font-size: 30px">\n\n    4\n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n\n\n<ion-card color="roxo">\n\n  <ion-card-content style="background-color: #424242;text-align: center; font-size: 30px">\n\n    <ion-list >\n\n      Sua Senha:\n\n    <ion-item-sliding>\n\n\n\n      <ion-item>\n\n\n\n        <h2 style="color: #000000; font-size: 30px; text-align: center">6</h2>\n\n      </ion-item>\n\n\n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger" (click)="openCancelar()" >\n\n          Cancelar\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha\src\pages\home-sg\home-sg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomeSgPage);
    return HomeSgPage;
}());

//# sourceMappingURL=home-sg.js.map

/***/ })

});
//# sourceMappingURL=0.js.map