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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var api_service_1 = require('../../shared/api.service');
var ProductsComponent = (function () {
    function ProductsComponent(apiService, location, router) {
        this.apiService = apiService;
        this.location = location;
        this.router = router;
        this.loggedUser = {
            username: '',
            token: ''
        };
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.getLoggedUserData();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.apiService.getProducts().then(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.selectProduct = function (product) {
        this.selectedProduct = product;
        this.getComments(product.id);
    };
    ProductsComponent.prototype.getComments = function (id) {
        var _this = this;
        this.apiService.getComments(id).then(function (comments) {
            return _this.comments = comments;
        });
    };
    ProductsComponent.prototype.getLoggedUserData = function () {
        this.loggedUser = this.apiService.getLoggedUser();
    };
    ProductsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductsComponent.prototype.logout = function () {
        var _this = this;
        setTimeout(function () {
            _this.loggedUser.username = '';
            _this.loggedUser.token = '';
            _this.router.navigate(['auth']);
        }, 1000);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products',
            templateUrl: 'products.component.html',
            styleUrls: ['products.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, common_1.Location, router_1.Router])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map