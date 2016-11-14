import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from "../../shared/comment.model";

@Component({
    moduleId: module.id,
	selector: 'product-item-comments',
	templateUrl: 'product-item-comments.component.html',
	styleUrls: ['product-item-comments.component.css']
})

export class ProductItemCommentsComponent { 
    @Input() comments: Comment[];
}