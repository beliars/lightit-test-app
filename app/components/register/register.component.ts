import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/user.model';
import { ApiService } from '../../services/api.service';

@Component({
	moduleId: module.id,
	selector: 'app-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})

export class RegisterComponent {

		regData = {
			username: '',
			password: ''
		};
		resData = {};
		successMessage: string;
		failMessage: string;

	constructor(private apiService: ApiService, private router: Router) {
	}

	onSubmit(form, usernameInput) {
		if (form.valid) {
			this.apiService.regUser(this.regData).then(resData => {
				if (resData.success) {
					this.failMessage = '';
					this.successMessage = 'Registration successfull. Logging in...';
					let link = ['/products'];
					setTimeout(() => {
						this.router.navigate(link);
					}, 1000);
				}
				else {
					this.successMessage = '';
					this.failMessage = resData.message + '.';
					usernameInput.focus();
				}
				return this.regData = resData;
			});
		}
	}
}