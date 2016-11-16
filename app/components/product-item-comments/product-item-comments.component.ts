import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';

import { Product } from "../../shared/product.model";
import { Comment } from "../../shared/comment.model";

@Component({
    moduleId: module.id,
	selector: 'product-item-comments',
	templateUrl: 'product-item-comments.component.html',
	styleUrls: ['product-item-comments.component.css']
})

export class ProductItemCommentsComponent implements OnChanges { 
	@Input() selectedProduct: Product;
    @Input() comments;
	@Input() loggedUser;

	resData = {};
	commentData: any = {};
	authError = false;
	validateError = false;

	constructor(private apiService: ApiService, private router: Router) {
	}

	ngOnChanges() {
		this.commentData = {
			rate: '',
			text: ''
		}	
		this.authError = false;
	}

	onSubmit(form) {
		if (!this.loggedUser.token) {
			this.authError = true;
			return;
		}
		if (!this.commentData.rate || !this.commentData.text) {
				this.validateError = true;
				return;
			}
		if (form.valid) {
			this.apiService.postComment(this.selectedProduct.id, this.commentData, this.loggedUser)
				.then(resData => {
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
					this.validateError = false;
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