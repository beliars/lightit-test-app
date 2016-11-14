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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.apiUrl = 'http://smktesting.herokuapp.com/api/';
    }
    ApiService.prototype.getProducts = function () {
        return this.http.get(this.apiUrl + 'products/')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.getComments = function (id) {
        return this.http.get(this.apiUrl + 'reviews/' + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.regUser = function (userData) {
        var body = JSON.stringify(userData);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl + 'register/', body, options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.loginUser = function (userData) {
        var body = JSON.stringify(userData);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl + 'login/', body, options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        console.log('An error has occurred!', error);
        return Promise.reject(error.message || error);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map