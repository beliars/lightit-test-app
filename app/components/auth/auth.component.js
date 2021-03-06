"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var api_service_1 = require('../../services/api.service');
var AuthComponent = (function () {
    function AuthComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.registerSelection = false;
        this.loginSelection = false;
    }
    AuthComponent.prototype.registerSelect = function () {
        this.registerSelection = true;
        this.loginSelection = false;
    };
    AuthComponent.prototype.loginSelect = function () {
        this.loginSelection = true;
        this.registerSelection = false;
    };
    AuthComponent.prototype.skipAuth = function () {
        this.apiService.clearUserInputData();
        this.router.navigate(['products']);
    };
    AuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-auth',
            templateUrl: 'auth.component.html',
            styleUrls: ['auth.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map