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

		userData = {
			username: '',
			password: ''
		};
		regData = {};
		message: string;

	constructor(private apiService: ApiService, private router: Router) {
	}

	onSubmit(form, usernameInput) {
		console.log(form);
		if (form.valid) {
			this.apiService.regUser(this.userData).then(regData => {
					console.log(regData);
					if (regData.success) {
						this.message = 'Registration successfull. Logging in...';
						let link = ['/products'];
						setTimeout(() => {
							this.router.navigate(link);
						}, 2000);
					} 
					else {
						this.message = regData.message;
						usernameInput.focus();
						this.userData.password = '';
					}
					return this.regData = regData;
				});
		}
	}
}