import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/user.model';
import { ApiService } from '../../shared/api.service';

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
		message: string;

	constructor(private apiService: ApiService, private router: Router) {
	}

	onSubmit(form, usernameInput) {
		if (form.valid) {
			this.apiService.regUser(this.regData).then(resData => {
				console.log(resData);
				if (resData.success) {
					this.message = 'Registration successfull. Logging in...';
					let link = ['/products'];
					setTimeout(() => {
						this.router.navigate(link);
					}, 2000);
				}
				else {
					this.message = resData.message;
					usernameInput.focus();
					this.regData.password = '';
				}
				return this.regData = resData;
			});
		}
	}
}