import { Component, Input } from '@angular/core';

import { Product } from "../../shared/product.model";
import { Comment } from "../../shared/comment.model";

@Component({
    moduleId: module.id,
	selector: 'product-item',
	templateUrl: 'product-item.component.html',
	styleUrls: ['product-item.component.css']
})

export class ProductItemComponent {
    @Input() selectedProduct: Product;
    @Input() comments: Comment[];
    @Input() loggedUser;
}