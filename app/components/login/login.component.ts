import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/user.model';
import { ApiService } from '../../shared/api.service';

@Component({
	moduleId: module.id,
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})

export class LoginComponent {

        userData = {
			username: '',
			password: ''
		};
		loginData = {};
		message: string;

	constructor(private apiService: ApiService, private router: Router) {
	}

    onSubmit(form, usernameInput) {
        console.log(form);
        if (form.valid) {
            this.apiService.loginUser(this.userData).then(loginData => {
                console.log(loginData);
                if (loginData.success) {
                    this.message = 'Logging in...';
                    let link = ['/products'];
                    setTimeout(() => {
                        this.router.navigate(link);
                    }, 2000);
                }
                else {
                    this.message = loginData.message;
                    usernameInput.focus();
                    this.userData.password = '';
                }
                return this.loginData = loginData;
            });
        }
    }
}