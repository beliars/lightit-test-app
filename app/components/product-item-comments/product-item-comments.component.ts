import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/api.service';

import { Product } from "../../shared/product.model";
import { Comment } from "../../shared/comment.model";

@Component({
    moduleId: module.id,
	selector: 'product-item-comments',
	templateUrl: 'product-item-comments.component.html',
	styleUrls: ['product-item-comments.component.css']
})

export class ProductItemCommentsComponent { 
	@Input() selectedProduct: Product;
    @Input() comments;
	@Input() loggedUser;

	resData = {};
	authError = false;

	constructor(private apiService: ApiService, private router: Router) {
	}

	commentData = {
		rate: '',
		text: ''
	}

	onSubmit(form) {
		if (form.valid) {
			if (!this.loggedUser.token) {
				this.authError = true;
				return;
			}
			this.apiService.postComment(this.selectedProduct.id, this.commentData, this.loggedUser)
				.then(resData => {
					console.log(resData);
					if (resData.success) {
						this.comments.push({
							created_at: Date.now(),
							text: this.commentData.text,
							rate: this.commentData.rate,
							created_by: {username: this.loggedUser.username}
						});
					}
					this.commentData.rate = '';
					this.commentData.text = '';
					return this.resData = resData;
				})
		}
	}

	toAuth() {
		setTimeout(() => {
            this.loggedUser.username = '';
            this.loggedUser.token = '';
            this.router.navigate(['auth']);
        }, 500);
	}
}