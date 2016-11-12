import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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
    selectedProduct;
    comments: Comment[];


    constructor(private apiService: ApiService, private location: Location) {
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.apiService.getProducts().subscribe(products => this.products = products);
    }

    selectProduct(product: Product) {
        this.selectedProduct = product;
        this.getComments(product.id);
    }

    getComments(id) {
        this.apiService.getComments(id).subscribe(comments => this.comments = comments);
    }

    goBack(): void {
        this.location.back();
    }

    closeProduct(selectedProduct: Product) {
        this.selectedProduct = !selectedProduct;
    }
}
