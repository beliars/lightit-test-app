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
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Accept': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.loggedUser = {
            username: '',
            token: ''
        };
    }
    ApiService.prototype.getLoggedUser = function () {
        return this.loggedUser;
    };
    ApiService.prototype.getProducts = function () {
        return this.http.get(this.apiUrl + 'products/', this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.getComments = function (id) {
        return this.http.get(this.apiUrl + 'reviews/' + id, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.regUser = function (regData) {
        var _this = this;
        this.loggedUser.username = regData.username;
        var body = JSON.stringify(regData);
        return this.http.post(this.apiUrl + 'register/', body, this.options)
            .toPromise()
            .then(function (res) {
            _this.loggedUser.token = res.json().token;
            return res.json();
        })
            .catch(this.handleError);
    };
    ApiService.prototype.loginUser = function (loginData) {
        var _this = this;
        this.loggedUser.username = loginData.username;
        var body = JSON.stringify(loginData);
        return this.http.post(this.apiUrl + 'login/', body, this.options)
            .toPromise()
            .then(function (res) {
            _this.loggedUser.token = res.json().token;
            return res.json();
        })
            .catch(this.handleError);
    };
    ApiService.prototype.postComment = function (id, commentData, user) {
        var body = JSON.stringify(commentData);
        // this.headers.append('Authorization', 'Token ' + user.token);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + user.token });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(this.headers);
        return this.http.post(this.apiUrl + 'reviews/' + id, body, options)
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