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
var rest_service_1 = require('../../shared/rest.service');
var ProductsComponent = (function () {
    function ProductsComponent(restService) {
        this.restService = restService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.restService.getProducts().subscribe(function (products) {
            console.log(products);
            return _this.products = products;
        });
    };
    ProductsComponent.prototype.selectProduct = function (product) {
        this.selectedProduct = product;
        this.getComments(product.id);
    };
    ProductsComponent.prototype.getComments = function (id) {
        var _this = this;
        this.restService.getComments(id).subscribe(function (comments) {
            console.log(comments);
            return _this.comments = comments;
        });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products',
            templateUrl: 'products.component.html',
            styleUrls: ['products.component.css']
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map