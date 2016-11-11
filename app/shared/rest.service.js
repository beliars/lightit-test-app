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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var RestService = (function () {
    function RestService(http) {
        this.http = http;
        this.apiUrl = 'http://smktesting.herokuapp.com/api/';
        this.testUser = {
            "username": "TestUser123",
            "password": "qwerty123"
        };
    }
    RestService.prototype.getProducts = function () {
        return this.http.get(this.apiUrl + 'products/')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.getComments = function (id) {
        return this.http.get(this.apiUrl + 'reviews/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.regUser = function () {
        var body = JSON.stringify(this.testUser);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl + 'register/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.handleError = function (error) {
        console.log('An error has occurred!', error);
        return Observable_1.Observable.throw(error.message || error);
    };
    RestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=rest.service.js.map