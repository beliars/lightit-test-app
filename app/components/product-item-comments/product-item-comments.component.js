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
var api_service_1 = require('../../shared/api.service');
var ProductItemCommentsComponent = (function () {
    function ProductItemCommentsComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.resData = {};
        this.authError = false;
        this.commentData = {
            rate: '',
            text: ''
        };
    }
    ProductItemCommentsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            if (!this.loggedUser.token) {
                this.authError = true;
                return;
            }
            this.apiService.postComment(this.selectedProduct.id, this.commentData, this.loggedUser)
                .then(function (resData) {
                console.log(resData);
                if (resData.success) {
                    _this.comments.push({
                        created_at: Date.now(),
                        text: _this.commentData.text,
                        rate: _this.commentData.rate,
                        created_by: { username: _this.loggedUser.username }
                    });
                }
                _this.commentData.rate = '';
                _this.commentData.text = '';
                return _this.resData = resData;
            });
        }
    };
    ProductItemCommentsComponent.prototype.toAuth = function () {
        var _this = this;
        setTimeout(function () {
            _this.loggedUser.username = '';
            _this.loggedUser.token = '';
            _this.router.navigate(['auth']);
        }, 500);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductItemCommentsComponent.prototype, "selectedProduct", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductItemCommentsComponent.prototype, "comments", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductItemCommentsComponent.prototype, "loggedUser", void 0);
    ProductItemCommentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-item-comments',
            templateUrl: 'product-item-comments.component.html',
            styleUrls: ['product-item-comments.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router])
    ], ProductItemCommentsComponent);
    return ProductItemCommentsComponent;
}());
exports.ProductItemCommentsComponent = ProductItemCommentsComponent;
//# sourceMappingURL=product-item-comments.component.js.map