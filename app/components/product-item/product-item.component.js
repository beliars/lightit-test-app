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
var product_model_1 = require("../../shared/product.model");
var ProductItemComponent = (function () {
    function ProductItemComponent() {
        this.closedProduct = new core_1.EventEmitter();
    }
    ProductItemComponent.prototype.closeProduct = function () {
        this.closedProduct.emit(this.selectedProduct);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_model_1.Product)
    ], ProductItemComponent.prototype, "selectedProduct", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProductItemComponent.prototype, "comments", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductItemComponent.prototype, "closedProduct", void 0);
    ProductItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-item',
            templateUrl: 'product-item.component.html',
            styleUrls: ['product-item.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProductItemComponent);
    return ProductItemComponent;
}());
exports.ProductItemComponent = ProductItemComponent;
//# sourceMappingURL=product-item.component.js.map