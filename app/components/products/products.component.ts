import { Component, OnInit } from '@angular/core';

import { RestService } from '../../shared/rest.service';
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
    selectedProduct: Product;
    comments: Comment[];


    constructor(private restService: RestService) {
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.restService.getProducts().subscribe(products => {
            console.log(products);
            return this.products = products;
            });
    }

    selectProduct(product: Product) {
        this.selectedProduct = product;
        this.getComments(product.id);
    }

    getComments(id) {
        this.restService.getComments(id).subscribe(comments => {
            console.log(comments);
            return this.comments = comments;
        })
    }
}
