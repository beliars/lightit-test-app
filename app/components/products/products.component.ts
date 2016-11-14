import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/api.service';
import { Product } from '../../shared/product.model';
import { Comment } from '../../shared/comment.model';

@Component({
    moduleId: module.id,
	selector: 'products',
	templateUrl: 'products.component.html',
	styleUrls: ['products.component.css']
})

export class ProductsComponent implements OnInit{ 

    products: Product[];
    selectedProduct: any;
    comments: Comment[];
    loggedUser = {
        username: '',
        token: ''
    };


    constructor(private apiService: ApiService, 
                private location: Location,
                private router: Router) {
    }

    ngOnInit() {
        this.getProducts();
        this.getLoggedUserData();
        console.log(this.loggedUser);
    }

    getProducts(): void {
        this.apiService.getProducts().then(products => this.products = products);
    }

    selectProduct(product: Product): void {
        this.selectedProduct = product;
        this.getComments(product.id);
    }

    getComments(id): void {
        this.apiService.getComments(id).then(comments => this.comments = comments);
    }

    getLoggedUserData(): void {
        this.loggedUser = this.apiService.getLoggedUser();
    }

    goBack(): void {
        this.location.back();
    }

    logout(): void {
        setTimeout(() => {
            this.loggedUser.username = '';
            this.loggedUser.token = '';
            this.router.navigate(['auth']);
        }, 1000);

    }

    closeProduct(selectedProduct: Product) {
        this.selectedProduct = !selectedProduct;
    }
}
