(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sauce_list_sauce_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sauce-list/sauce-list.component */ "./src/app/sauce-list/sauce-list.component.ts");
/* harmony import */ var _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sauce-form/sauce-form.component */ "./src/app/sauce-form/sauce-form.component.ts");
/* harmony import */ var _single_sauce_single_sauce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-sauce/single-sauce.component */ "./src/app/single-sauce/single-sauce.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'sauces', component: _sauce_list_sauce_list_component__WEBPACK_IMPORTED_MODULE_2__["SauceListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'sauce/:id', component: _single_sauce_single_sauce_component__WEBPACK_IMPORTED_MODULE_4__["SingleSauceComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'new-sauce', component: _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_3__["SauceFormComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'modify-sauce/:id', component: _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_3__["SauceFormComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', pathMatch: 'full', redirectTo: 'sauces' },
    { path: '**', redirectTo: 'sauces' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  width: 100%;\n  max-width: 1000px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERvY3VtZW50c1xcRm9ybWF0aW9uX0RldmVsb3BwZXVyX1dFQl9PcGVuQ2xhc3Nyb29tc1xcUHJvamV0XzZfQ29uc3RydWlzZXpfdW5lX0FQSV9zZWN1cmlzw6llXFxTb19QZWtvY2tvXFxmcm9udGVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _sauce_list_sauce_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sauce-list/sauce-list.component */ "./src/app/sauce-list/sauce-list.component.ts");
/* harmony import */ var _single_sauce_single_sauce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-sauce/single-sauce.component */ "./src/app/single-sauce/single-sauce.component.ts");
/* harmony import */ var _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sauce-form/sauce-form.component */ "./src/app/sauce-form/sauce-form.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/auth-interceptor */ "./src/app/interceptors/auth-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _sauce_list_sauce_list_component__WEBPACK_IMPORTED_MODULE_6__["SauceListComponent"],
                _single_sauce_single_sauce_component__WEBPACK_IMPORTED_MODULE_7__["SingleSauceComponent"],
                _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_8__["SauceFormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<form [formGroup]=\"loginForm\" *ngIf=\"!loading\">\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\r\n  </div>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\" (click)=\"onLogin()\">LOGIN</button>\r\n  <p class=\"text-danger\" *ngIf=\"errorMsg\">{{ errorMsg }}</p>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 2em auto;\n  max-width: 750px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9EOlxcRG9jdW1lbnRzXFxGb3JtYXRpb25fRGV2ZWxvcHBldXJfV0VCX09wZW5DbGFzc3Jvb21zXFxQcm9qZXRfNl9Db25zdHJ1aXNlel91bmVfQVBJX3NlY3VyaXPDqWVcXFNvX1Bla29ja29cXGZyb250ZW5kL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0NDQ0QiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxuICBtYXgtd2lkdGg6IDc1MHB4O1xyXG59XHJcbiIsImZvcm0ge1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loading = true;
        var email = this.loginForm.get('email').value;
        var password = this.loginForm.get('password').value;
        this.auth.loginUser(email, password).then(function () {
            _this.loading = false;
            _this.router.navigate(['/sauces']);
        }).catch(function (error) {
            _this.loading = false;
            _this.errorMsg = error.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<form [formGroup]=\"signupForm\" *ngIf=\"!loading\">\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\r\n  </div>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"signupForm.invalid\" (click)=\"onSignup()\">SIGN UP</button>\r\n  <p class=\"text-danger\" *ngIf=\"errorMsg\">{{ errorMsg }}</p>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 2em auto;\n  max-width: 750px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvRDpcXERvY3VtZW50c1xcRm9ybWF0aW9uX0RldmVsb3BwZXVyX1dFQl9PcGVuQ2xhc3Nyb29tc1xcUHJvamV0XzZfQ29uc3RydWlzZXpfdW5lX0FQSV9zZWN1cmlzw6llXFxTb19QZWtvY2tvXFxmcm9udGVuZC9zcmNcXGFwcFxcYXV0aFxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA3NTBweDtcclxufVxyXG4iLCJmb3JtIHtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgbWF4LXdpZHRoOiA3NTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    SignupComponent.prototype.onSignup = function () {
        var _this = this;
        this.loading = true;
        var email = this.signupForm.get('email').value;
        var password = this.signupForm.get('password').value;
        this.auth.createUser(email, password).then(function (response) {
            console.log(response.message);
            _this.auth.loginUser(email, password).then(function () {
                _this.loading = false;
                _this.router.navigate(['/sauces']);
            }).catch(function (error) {
                _this.loading = false;
                console.error(error);
                _this.errorMsg = error.message;
            });
        }).catch(function (error) {
            _this.loading = false;
            console.error(error);
            _this.errorMsg = error.message;
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"left-nav\">\r\n    <ul>\r\n      <li>\r\n        <a routerLink=\"sauces\" routerLinkActive=\"active\" *ngIf=\"isAuth\">\r\n          Toute les sauces\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"new-sauce\" routerLinkActive=\"active\" *ngIf=\"isAuth\">\r\n          Ajouter une sauce\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"logo\">\r\n    <div class=\"logo-image\">\r\n      <img src=\"../../assets/images/flame.png\">\r\n    </div>\r\n    <div class=\"logo-text\">\r\n      <h1>\r\n        Piquante\r\n      </h1>\r\n      <h5>\r\n        La meilleure application de notation de sauces\r\n      </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"right-nav\">\r\n    <ul>\r\n      <li>\r\n        <a routerLink=\"signup\" routerLinkActive=\"active\" *ngIf=\"!isAuth\">\r\n          Inscription\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"login\" routerLinkActive=\"active\" *ngIf=\"!isAuth\">\r\n          Connexion\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"onLogout()\" *ngIf=\"isAuth\">\r\n          Déconnexion\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 1400px;\n  margin: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  display: flex;\n  padding: 20px;\n  justify-content: space-between;\n  border-bottom: thin solid black;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: 2.4em;\n  margin: 0;\n}\n\nh5 {\n  font-size: 1.2em;\n  font-weight: 400;\n  margin: 0;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n}\n\n.logo-text {\n  text-align: center;\n}\n\n.logo-image {\n  margin-right: 1em;\n}\n\n.logo-image img {\n  height: 4.5em;\n}\n\n.left-nav, .right-nav {\n  align-self: center;\n  width: 30%;\n}\n\n.right-nav ul {\n  justify-content: flex-end;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n\nli {\n  margin: 0 15px;\n}\n\na {\n  color: black;\n  font-weight: 400;\n  text-decoration: none;\n  cursor: pointer;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.active {\n  font-weight: 700;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxEb2N1bWVudHNcXEZvcm1hdGlvbl9EZXZlbG9wcGV1cl9XRUJfT3BlbkNsYXNzcm9vbXNcXFByb2pldF82X0NvbnN0cnVpc2V6X3VuZV9BUElfc2VjdXJpc8OpZVxcU29fUGVrb2Nrb1xcZnJvbnRlbmQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtDQ0NEOztBREVEO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7Q0NDRDs7QURFRDtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0NDQ0Q7O0FERUQ7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7Q0NDRDs7QURFRDtFQUNFLG1CQUFBO0NDQ0Q7O0FERUQ7RUFJRSxrQkFBQTtDQ0ZEOztBRERDO0VBQ0UsY0FBQTtDQ0dIOztBREVEO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0NDQ0Q7O0FER0M7RUFDRSwwQkFBQTtDQ0FIOztBRElEO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7Q0NERDs7QURJRDtFQUNFLGVBQUE7Q0NERDs7QURJRDtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7Q0NERDs7QURFQztFQUNFLDJCQUFBO0NDQUg7O0FESUQ7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0NDREQiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDIuNGVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDUge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28taW1hZ2Uge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQuNWVtO1xyXG4gIH1cclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmxlZnQtbmF2LCAucmlnaHQtbmF2IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnJpZ2h0LW5hdiB7XHJcbiAgdWwge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmxpIHtcclxuICBtYXJnaW46IDAgMTVweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iLCJuYXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBibGFjaztcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIuNGVtO1xuICBtYXJnaW46IDA7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4ubG9nby1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDQuNWVtO1xufVxuXG4ubGVmdC1uYXYsIC5yaWdodC1uYXYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5yaWdodC1uYXYgdWwge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxubGkge1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxuYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5hY3RpdmUge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.auth.isAuth$.subscribe(function (auth) {
            _this.isAuth = auth;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.auth.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/auth-interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth-interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.auth.getToken();
        var newRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(newRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/models/Sauce.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/Sauce.model.ts ***!
  \***************************************/
/*! exports provided: Sauce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sauce", function() { return Sauce; });
var Sauce = /** @class */ (function () {
    function Sauce() {
    }
    return Sauce;
}());



/***/ }),

/***/ "./src/app/sauce-form/sauce-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/sauce-form/sauce-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<form [formGroup]=\"sauceForm\" *ngIf=\"!loading\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"manufacturer\">Manufacturer</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"manufacturer\" formControlName=\"manufacturer\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"description\">Description</label>\r\n    <textarea class=\"form-control\" id=\"description\" rows=\"5\" formControlName=\"description\"></textarea>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"file\" accept=\"image/*\" #imageInput (change)=\"onFileAdded($event)\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"imageInput.click()\">ADD IMAGE</button>\r\n    <img [src]=\"imagePreview\" *ngIf=\"imagePreview\" style=\"max-height: 100px;display:block;margin-top:10px\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"main-pepper\">Main Pepper Ingredient</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"main-pepper\" formControlName=\"mainPepper\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"heat\">Heat</label>\r\n    <div class=\"heat-container\">\r\n      <input type=\"range\" class=\"custom-range heat-range\" min=\"1\" max=\"10\" id=\"heat\" formControlName=\"heat\">\r\n      <input type=\"number\" class=\"form-control heat-reading\" formControlName=\"heatValue\">\r\n    </div>\r\n  </div>\r\n  <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"sauceForm.invalid\">SUBMIT</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/sauce-form/sauce-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sauce-form/sauce-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 2em auto;\n  max-width: 750px;\n}\n\n.heat-range {\n  width: 60%;\n  display: block;\n}\n\n.heat-container {\n  display: flex;\n}\n\n.heat-reading {\n  width: 5em;\n  margin-left: 1.5em;\n  background-color: white;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F1Y2UtZm9ybS9EOlxcRG9jdW1lbnRzXFxGb3JtYXRpb25fRGV2ZWxvcHBldXJfV0VCX09wZW5DbGFzc3Jvb21zXFxQcm9qZXRfNl9Db25zdHJ1aXNlel91bmVfQVBJX3NlY3VyaXPDqWVcXFNvX1Bla29ja29cXGZyb250ZW5kL3NyY1xcYXBwXFxzYXVjZS1mb3JtXFxzYXVjZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYXVjZS1mb3JtL3NhdWNlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0NDQ0Q7O0FERUQ7RUFDRSxXQUFBO0VBQ0EsZUFBQTtDQ0NEOztBREVEO0VBQ0UsY0FBQTtDQ0NEOztBREVEO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7Q0NDRDs7QURFRDtFQUNFLGNBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL3NhdWNlLWZvcm0vc2F1Y2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA3NTBweDtcclxufVxyXG5cclxuLmhlYXQtcmFuZ2Uge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oZWF0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmhlYXQtcmVhZGluZyB7XHJcbiAgd2lkdGg6IDVlbTtcclxuICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsImZvcm0ge1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xufVxuXG4uaGVhdC1yYW5nZSB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhdC1yZWFkaW5nIHtcbiAgd2lkdGg6IDVlbTtcbiAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/sauce-form/sauce-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sauce-form/sauce-form.component.ts ***!
  \****************************************************/
/*! exports provided: SauceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SauceFormComponent", function() { return SauceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_sauces_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sauces.service */ "./src/app/services/sauces.service.ts");
/* harmony import */ var _models_Sauce_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Sauce.model */ "./src/app/models/Sauce.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SauceFormComponent = /** @class */ (function () {
    function SauceFormComponent(formBuilder, route, router, sauces, auth) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.sauces = sauces;
        this.auth = auth;
    }
    SauceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            if (!params.id) {
                _this.mode = 'new';
                _this.initEmptyForm();
                _this.loading = false;
            }
            else {
                _this.mode = 'edit';
                _this.sauces.getSauceById(params.id).then(function (sauce) {
                    _this.sauce = sauce;
                    _this.initModifyForm(sauce);
                    _this.loading = false;
                }).catch(function (error) {
                    _this.errorMsg = JSON.stringify(error);
                });
            }
        });
    };
    SauceFormComponent.prototype.initEmptyForm = function () {
        var _this = this;
        this.sauceForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            manufacturer: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mainPepper: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heat: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heatValue: [{ value: 1, disabled: true }]
        });
        this.sauceForm.get('heat').valueChanges.subscribe(function (value) {
            _this.sauceForm.get('heatValue').setValue(value);
        });
    };
    SauceFormComponent.prototype.initModifyForm = function (sauce) {
        var _this = this;
        this.sauceForm = this.formBuilder.group({
            name: [this.sauce.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            manufacturer: [this.sauce.manufacturer, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [this.sauce.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: [this.sauce.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mainPepper: [this.sauce.mainPepper, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heat: [this.sauce.heat, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heatValue: [{ value: this.sauce.heat, disabled: true }]
        });
        this.sauceForm.get('heat').valueChanges.subscribe(function (value) {
            _this.sauceForm.get('heatValue').setValue(value);
        });
        this.imagePreview = this.sauce.imageUrl;
    };
    SauceFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var newSauce = new _models_Sauce_model__WEBPACK_IMPORTED_MODULE_4__["Sauce"]();
        newSauce.name = this.sauceForm.get('name').value;
        newSauce.manufacturer = this.sauceForm.get('manufacturer').value;
        newSauce.description = this.sauceForm.get('description').value;
        newSauce.mainPepper = this.sauceForm.get('mainPepper').value;
        newSauce.heat = this.sauceForm.get('heat').value;
        newSauce.userId = this.auth.getUserId();
        if (this.mode === 'new') {
            this.sauces.createSauce(newSauce, this.sauceForm.get('image').value).then(function (response) {
                console.log(response.message);
                _this.loading = false;
                _this.router.navigate(['/sauces']);
            }).catch(function (error) {
                console.error(error);
                _this.loading = false;
                _this.errorMsg = error.message;
            });
        }
        else if (this.mode === 'edit') {
            this.sauces.modifySauce(this.sauce._id, newSauce, this.sauceForm.get('image').value).then(function (response) {
                console.log(response.message);
                _this.loading = false;
                _this.router.navigate(['/sauces']);
            }).catch(function (error) {
                console.error(error);
                _this.loading = false;
                _this.errorMsg = error.message;
            });
        }
    };
    SauceFormComponent.prototype.onFileAdded = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.sauceForm.get('image').setValue(file);
        this.sauceForm.updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    SauceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sauce-form',
            template: __webpack_require__(/*! ./sauce-form.component.html */ "./src/app/sauce-form/sauce-form.component.html"),
            styles: [__webpack_require__(/*! ./sauce-form.component.scss */ "./src/app/sauce-form/sauce-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_sauces_service__WEBPACK_IMPORTED_MODULE_3__["SaucesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SauceFormComponent);
    return SauceFormComponent;
}());



/***/ }),

/***/ "./src/app/sauce-list/sauce-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/sauce-list/sauce-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<p *ngIf=\"!loading && sauces.length <= 0\">\r\n  No sauces to display!\r\n</p>\r\n<p class=\"list-title\" *ngIf=\"!loading && sauces.length > 0\">THE SAUCES</p>\r\n<div class=\"sauce-list\" *ngIf=\"!loading && sauces.length  > 0\">\r\n  <div class=\"sauce-list-item\" *ngFor=\"let sauce of sauces\" (click)=\"onClickSauce(sauce._id)\">\r\n    <img [src]=\"sauce.imageUrl\">\r\n    <h4>{{ sauce.name | uppercase }}</h4>\r\n    <p>Heat: {{ sauce.heat }}/10</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sauce-list/sauce-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sauce-list/sauce-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sauce-list {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.sauce-list-item {\n  text-align: center;\n  width: 220px;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n\n.sauce-list-item img {\n  max-width: 200px;\n  max-height: 250px;\n}\n\n.sauce-list-item h4 {\n  margin: 0;\n  font-weight: 500;\n}\n\n.sauce-list-item p {\n  margin: 0;\n}\n\n.sauce-list-item:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 1px 1px 20px rgba(120, 120, 120, 0.3);\n}\n\n.list-title {\n  text-align: center;\n  margin: 2em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F1Y2UtbGlzdC9EOlxcRG9jdW1lbnRzXFxGb3JtYXRpb25fRGV2ZWxvcHBldXJfV0VCX09wZW5DbGFzc3Jvb21zXFxQcm9qZXRfNl9Db25zdHJ1aXNlel91bmVfQVBJX3NlY3VyaXPDqWVcXFNvX1Bla29ja29cXGZyb250ZW5kL3NyY1xcYXBwXFxzYXVjZS1saXN0XFxzYXVjZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYXVjZS1saXN0L3NhdWNlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtDQ0NEOztBREVEO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBWUEsaUNBQUE7RUFDQSxnQkFBQTtDQ1ZEOztBREZDO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtDQ0lIOztBREZDO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0NDSUg7O0FERkM7RUFDRSxVQUFBO0NDSUg7O0FEQUM7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0RBQUE7Q0NFSDs7QURFRDtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL3NhdWNlLWxpc3Qvc2F1Y2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXVjZS1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnNhdWNlLWxpc3QtaXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMjBweCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuMyk7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbn1cclxuIiwiLnNhdWNlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc2F1Y2UtbGlzdC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2F1Y2UtbGlzdC1pdGVtIGltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xufVxuLnNhdWNlLWxpc3QtaXRlbSBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zYXVjZS1saXN0LWl0ZW0gcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5zYXVjZS1saXN0LWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjMpO1xufVxuXG4ubGlzdC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sauce-list/sauce-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sauce-list/sauce-list.component.ts ***!
  \****************************************************/
/*! exports provided: SauceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SauceListComponent", function() { return SauceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sauces_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sauces.service */ "./src/app/services/sauces.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SauceListComponent = /** @class */ (function () {
    function SauceListComponent(sauce, router) {
        this.sauce = sauce;
        this.router = router;
    }
    SauceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.sauceSub = this.sauce.sauces$.subscribe(function (sauces) {
            _this.sauces = sauces;
            _this.loading = false;
            _this.errorMsg = null;
        }, function (error) {
            _this.errorMsg = JSON.stringify(error);
            _this.loading = false;
        });
        this.sauce.getSauces();
    };
    SauceListComponent.prototype.onClickSauce = function (id) {
        this.router.navigate(['sauce', id]);
    };
    SauceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sauce-list',
            template: __webpack_require__(/*! ./sauce-list.component.html */ "./src/app/sauce-list/sauce-list.component.html"),
            styles: [__webpack_require__(/*! ./sauce-list.component.scss */ "./src/app/sauce-list/sauce-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_sauces_service__WEBPACK_IMPORTED_MODULE_1__["SaucesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SauceListComponent);
    return SauceListComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.auth.isAuth$.subscribe(function (auth) {
                if (auth) {
                    observer.next(true);
                }
                else {
                    _this.router.navigate(['/login']);
                }
            });
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuth$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    AuthService.prototype.createUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/api/auth/signup', { email: email, password: password }).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.getToken = function () {
        return this.authToken;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.loginUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/api/auth/login', { email: email, password: password }).subscribe(function (response) {
                _this.userId = response.userId;
                _this.authToken = response.token;
                _this.isAuth$.next(true);
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.userId = null;
        this.isAuth$.next(false);
        this.router.navigate(['login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/sauces.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/sauces.service.ts ***!
  \********************************************/
/*! exports provided: SaucesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaucesService", function() { return SaucesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaucesService = /** @class */ (function () {
    /*tempSauces = [
      {
        _id: 'eizomfhazo',
        name: 'The Last Dab',
        manufacturer: 'Heatonist',
        description: 'CAUTION! The Last Dab—the hottest sauce on Hot Ones, known for turning guests and fans alike into stuttering, fire-breathing lunatics—just got even crazier. The Last Dab first took the world by storm as the only sauce made with Smokin\' Ed Currie\'s infamous "Pepper X." This XX-rated edition gets its one-two punch of heat from addition of the equally lethal "Chocolate Pepper X." All you need is a dab to light the inferno and experience the Hot Ones tradition.',
        heat: 10,
        likes: 100,
        dislikes: 0,
        imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/LAstdabReduxx_1024x1024-1_1024x1024.jpg?v=1527778720',
        mainPepper: 'Pepper X',
        usersLiked: [],
        usersDisliked: []
      },
      {
        _id: 'oimhoiohmhoih',
        name: 'Los Calientes',
        manufacturer: 'Heatonist',
        description: 'Hot Ones is the show where celebrities divulge their deepest secrets while eating progressively hotter wings. The middle of the lineup is where hot sauce magic happens—the perfect sweet spot between maximum flavor and pleasing heat. Inspired by our favorite Cali-Mex flavors, Los Calientes surfs over the palate with a punchy, smoky blend...',
        heat: 5,
        likes: 100,
        dislikes: 0,
        imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/LOS_CALIENTES1_1024x1024.jpg?v=1527709467',
        mainPepper: 'Serrano',
        usersLiked: [],
        usersDisliked: []
      },
      {
        _id: 'oimjoijlhui',
        name: 'Black Garlic',
        manufacturer: 'Bravado Spice Company',
        description: 'Team Bravado is back at it with an elevated offering where Carolina Reaper meets aged black garlic. The sweetness of the slowly cooked garlic tempers the initial bitter burn of the Reaper, but not for long... This is a biting hot sauce you\'ll want in marinades, sauces, dressings, and on those garlic wings! ',
        heat: 6,
        likes: 100,
        dislikes: 0,
        imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/bravado-blackgarlichotsauce_1024x1024.jpg?v=1527270029',
        mainPepper: 'Carolina Reaper',
        usersLiked: [],
        usersDisliked: []
      },
      {
        _id: 'sildjhv',
        name: 'Smoked Onion',
        manufacturer: 'Butterfly Bakery',
        description: 'The makers at Butterfly Bakery smoke Vermont onions with maplewood to mix with red jalapeños for this sweet and tangy sauce. Great on everything from bagels lox & cream cheese to hummus to pork and whatever else you can name. The medium heat level makes it the perfect smoky sauce for anyone!',
        heat: 3,
        likes: 100,
        dislikes: 0,
        imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/smokedonion1_1024x1024_copy_1024x1024.jpg?v=1538413599',
        mainPepper: 'Jalapeños',
        usersLiked: [],
        usersDisliked: []
      },
      {
        _id: 'eroimfgjlfh',
        name: 'Blair\'s Ultra Death Sauce',
        manufacturer: 'Blair\'s',
        description: 'Blair\'s Ultra Death has established itself as a bit of a legend within the hot sauce world.\n' +
          '\n' +
          'If there\'s one thing that creator Blair Lazar does well it\'s retaining the flavour in his super-hot sauces. They\'ll melt your face off for sure, but despite the extract they still taste damned fine.\n' +
          '\n' +
          'Just to emphasise the seriousness of the heat we\'re dealing with here, all Blair\'s super-hot sauces in the Death range now come in a nifty coffin box with his trademark skull keyring attached to the bottle.',
        heat: 9,
        likes: 100,
        dislikes: 0,
        imageUrl: 'https://www.chilliworld.com/content/images/thumbs/0000827_blairs-ultra-death-sauce-in-a-coffin_550.jpeg',
        mainPepper: 'Carolina Reaper',
        usersLiked: [],
        usersDisliked: []
      }
    ];*/
    function SaucesService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.sauces$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SaucesService.prototype.getSauces = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/sauces').subscribe(function (sauces) {
            _this.sauces$.next(sauces);
        }, function (error) {
            _this.sauces$.next([]);
            console.error(error);
        });
    };
    SaucesService.prototype.getSauceById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/api/sauces/' + id).subscribe(function (sauce) {
                resolve(sauce);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService.prototype.likeSauce = function (id, like) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/api/sauces/' + id + '/like', {
                userId: _this.auth.getUserId(),
                like: like ? 1 : 0
            })
                .subscribe(function (response) {
                resolve(like);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService.prototype.dislikeSauce = function (id, dislike) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/api/sauces/' + id + '/like', {
                userId: _this.auth.getUserId(),
                like: dislike ? -1 : 0
            })
                .subscribe(function (response) {
                resolve(dislike);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService.prototype.createSauce = function (sauce, image) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            formData.append('sauce', JSON.stringify(sauce));
            formData.append('image', image);
            _this.http.post('http://localhost:3000/api/sauces', formData).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService.prototype.modifySauce = function (id, sauce, image) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (typeof image === 'string') {
                _this.http.put('http://localhost:3000/api/sauces/' + id, sauce).subscribe(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            }
            else {
                var formData = new FormData();
                formData.append('sauce', JSON.stringify(sauce));
                formData.append('image', image);
                _this.http.put('http://localhost:3000/api/sauces/' + id, formData).subscribe(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            }
        });
    };
    SaucesService.prototype.deleteSauce = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('http://localhost:3000/api/sauces/' + id).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SaucesService);
    return SaucesService;
}());



/***/ }),

/***/ "./src/app/single-sauce/single-sauce.component.html":
/*!**********************************************************!*\
  !*** ./src/app/single-sauce/single-sauce.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div class=\"sauce-container\" *ngIf=\"!loading\">\r\n  <img [src]=\"sauce?.imageUrl\" alt=\"\">\r\n  <div class=\"sauce-info\">\r\n    <h1 class=\"sauce-name\">{{ sauce?.name }}</h1>\r\n    <p class=\"manufacturer\">by {{ sauce?.manufacturer }}</p>\r\n    <h3>Description</h3>\r\n    <p>{{ sauce.description }}</p>\r\n    <div class=\"like-buttons\" *ngIf=\"!likePending\">\r\n      <div class=\"likes\">\r\n        <i [ngClass]=\"{ 'fas liked': liked, 'far': !liked, 'disabled': disliked }\" class=\"like fa-thumbs-up fa-lg\" (click)=\"onLike()\"></i>\r\n        <span>{{ sauce.likes }}</span>\r\n      </div>\r\n      <div class=\"dislikes\">\r\n        <i [ngClass]=\"{ 'fas disliked': disliked, 'far': !disliked, 'disabled': liked }\" class=\"dislike fa-thumbs-down fa-lg\" (click)=\"onDislike()\"></i>\r\n        <span>{{ sauce.dislikes }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"like-pending\" *ngIf=\"likePending\">\r\n      <mat-spinner class=\"white-spinner\"></mat-spinner>\r\n    </div>\r\n    <div class=\"control-buttons\">\r\n      <button mat-raised-button (click)=\"onBack()\">BACK</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"onModify()\" *ngIf=\"userId === sauce.userId\">MODIFY</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onDelete()\" *ngIf=\"userId === sauce.userId\">DELETE</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/single-sauce/single-sauce.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/single-sauce/single-sauce.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sauce-container {\n  display: flex;\n}\n.sauce-container img {\n  max-height: 70vh;\n  flex: 1;\n}\n.sauce-info {\n  padding: 40px 20px;\n  flex: 1;\n}\n.manufacturer {\n  margin: 0;\n}\n.sauce-name {\n  margin: 0;\n}\n.like-buttons {\n  display: flex;\n}\n.like-buttons i {\n  margin-right: 0.5em;\n  cursor: pointer;\n}\n.likes, .dislikes {\n  margin: 0 0.4em;\n}\n.liked {\n  color: #33db00;\n}\n.disliked {\n  color: #db3300;\n}\n.like:hover {\n  color: #33db00;\n}\n.dislike {\n  -webkit-transform: scaleX(-1) translateY(5px);\n          transform: scaleX(-1) translateY(5px);\n}\n.dislike:hover {\n  color: #db3300;\n}\n.disabled {\n  cursor: none;\n  color: #bebebe;\n}\n.disabled:hover {\n  color: #bebebe;\n}\n.control-buttons button {\n  margin: 1em 1em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXNhdWNlL0Q6XFxEb2N1bWVudHNcXEZvcm1hdGlvbl9EZXZlbG9wcGV1cl9XRUJfT3BlbkNsYXNzcm9vbXNcXFByb2pldF82X0NvbnN0cnVpc2V6X3VuZV9BUElfc2VjdXJpc8OpZVxcU29fUGVrb2Nrb1xcZnJvbnRlbmQvc3JjXFxhcHBcXHNpbmdsZS1zYXVjZVxcc2luZ2xlLXNhdWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaW5nbGUtc2F1Y2Uvc2luZ2xlLXNhdWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtDQ0NEO0FEQUM7RUFDRSxpQkFBQTtFQUNBLFFBQUE7Q0NFSDtBREVEO0VBQ0UsbUJBQUE7RUFDQSxRQUFBO0NDQ0Q7QURFRDtFQUNFLFVBQUE7Q0NDRDtBREVEO0VBQ0UsVUFBQTtDQ0NEO0FERUQ7RUFDRSxjQUFBO0NDQ0Q7QURBQztFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7Q0NFSDtBREVEO0VBQ0UsZ0JBQUE7Q0NDRDtBREVEO0VBQ0UsZUFBQTtDQ0NEO0FERUQ7RUFDRSxlQUFBO0NDQ0Q7QURHQztFQUNFLGVBQUE7Q0NBSDtBRElEO0VBQ0UsOENBQUE7VUFBQSxzQ0FBQTtDQ0REO0FERUM7RUFDRSxlQUFBO0NDQUg7QURJRDtFQUNFLGFBQUE7RUFJQSxlQUFBO0NDSkQ7QURDQztFQUNFLGVBQUE7Q0NDSDtBREtDO0VBQ0Usb0JBQUE7Q0NGSCIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1zYXVjZS9zaW5nbGUtc2F1Y2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F1Y2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn1cclxuXHJcbi5zYXVjZS1pbmZvIHtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm1hbnVmYWN0dXJlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2F1Y2UtbmFtZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubGlrZS1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5saWtlcywgLmRpc2xpa2VzIHtcclxuICBtYXJnaW46IDAgMC40ZW07XHJcbn1cclxuXHJcbi5saWtlZCB7XHJcbiAgY29sb3I6IHJnYmEoNTEsIDIxOSwgMCwgMSk7XHJcbn1cclxuXHJcbi5kaXNsaWtlZCB7XHJcbiAgY29sb3I6IHJnYmEoMjE5LCA1MSwgMCwgMSk7XHJcbn1cclxuXHJcbi5saWtlIHtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDUxLCAyMTksIDAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2xpa2Uge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKSB0cmFuc2xhdGVZKDVweCk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyMTksIDUxLCAwLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMTkwLCAxOTAsIDE5MCwgMSk7XHJcbiAgfVxyXG4gIGNvbG9yOiByZ2JhKDE5MCwgMTkwLCAxOTAsIDEpO1xyXG59XHJcblxyXG4uY29udHJvbC1idXR0b25zIHtcclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAxZW0gMWVtIDAgMDtcclxuICB9XHJcbn1cclxuIiwiLnNhdWNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2F1Y2UtY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG4gIGZsZXg6IDE7XG59XG5cbi5zYXVjZS1pbmZvIHtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICBmbGV4OiAxO1xufVxuXG4ubWFudWZhY3R1cmVyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2F1Y2UtbmFtZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxpa2UtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubGlrZS1idXR0b25zIGkge1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saWtlcywgLmRpc2xpa2VzIHtcbiAgbWFyZ2luOiAwIDAuNGVtO1xufVxuXG4ubGlrZWQge1xuICBjb2xvcjogIzMzZGIwMDtcbn1cblxuLmRpc2xpa2VkIHtcbiAgY29sb3I6ICNkYjMzMDA7XG59XG5cbi5saWtlOmhvdmVyIHtcbiAgY29sb3I6ICMzM2RiMDA7XG59XG5cbi5kaXNsaWtlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHRyYW5zbGF0ZVkoNXB4KTtcbn1cbi5kaXNsaWtlOmhvdmVyIHtcbiAgY29sb3I6ICNkYjMzMDA7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm9uZTtcbiAgY29sb3I6ICNiZWJlYmU7XG59XG4uZGlzYWJsZWQ6aG92ZXIge1xuICBjb2xvcjogI2JlYmViZTtcbn1cblxuLmNvbnRyb2wtYnV0dG9ucyBidXR0b24ge1xuICBtYXJnaW46IDFlbSAxZW0gMCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/single-sauce/single-sauce.component.ts":
/*!********************************************************!*\
  !*** ./src/app/single-sauce/single-sauce.component.ts ***!
  \********************************************************/
/*! exports provided: SingleSauceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSauceComponent", function() { return SingleSauceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sauces_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sauces.service */ "./src/app/services/sauces.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleSauceComponent = /** @class */ (function () {
    function SingleSauceComponent(sauces, route, auth, router) {
        this.sauces = sauces;
        this.route = route;
        this.auth = auth;
        this.router = router;
    }
    SingleSauceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.auth.getUserId();
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.sauces.getSauceById(params.id).then(function (sauce) {
                _this.sauce = sauce;
                _this.loading = false;
                if (sauce.usersLiked.find(function (user) { return user === _this.userId; })) {
                    _this.liked = true;
                }
                else if (sauce.usersDisliked.find(function (user) { return user === _this.userId; })) {
                    _this.disliked = true;
                }
            });
        });
        this.userId = this.auth.getUserId();
    };
    SingleSauceComponent.prototype.onLike = function () {
        var _this = this;
        if (this.disliked) {
            return 0;
        }
        this.likePending = true;
        this.sauces.likeSauce(this.sauce._id, !this.liked).then(function (liked) {
            _this.likePending = false;
            _this.liked = liked;
            if (liked) {
                _this.sauce.likes++;
            }
            else {
                _this.sauce.likes--;
            }
        });
    };
    SingleSauceComponent.prototype.onDislike = function () {
        var _this = this;
        if (this.liked) {
            return 0;
        }
        this.likePending = true;
        this.sauces.dislikeSauce(this.sauce._id, !this.disliked).then(function (disliked) {
            _this.likePending = false;
            _this.disliked = disliked;
            if (disliked) {
                _this.sauce.dislikes++;
            }
            else {
                _this.sauce.dislikes--;
            }
        });
    };
    SingleSauceComponent.prototype.onBack = function () {
        this.router.navigate(['/sauces']);
    };
    SingleSauceComponent.prototype.onModify = function () {
        this.router.navigate(['/modify-sauce', this.sauce._id]);
    };
    SingleSauceComponent.prototype.onDelete = function () {
        var _this = this;
        this.loading = true;
        this.sauces.deleteSauce(this.sauce._id).then(function (response) {
            console.log(response.message);
            _this.loading = false;
            _this.router.navigate(['/sauces']);
        }).catch(function (error) {
            _this.loading = false;
            _this.errorMessage = error.message;
            console.error(error);
        });
    };
    SingleSauceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-sauce',
            template: __webpack_require__(/*! ./single-sauce.component.html */ "./src/app/single-sauce/single-sauce.component.html"),
            styles: [__webpack_require__(/*! ./single-sauce.component.scss */ "./src/app/single-sauce/single-sauce.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_sauces_service__WEBPACK_IMPORTED_MODULE_1__["SaucesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SingleSauceComponent);
    return SingleSauceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Formation_Developpeur_WEB_OpenClassrooms\Projet_6_Construisez_une_API_securisée\So_Pekocko\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map