import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/user.model';
import { ApiService } from '../../services/api.service';

@Component({
	moduleId: module.id,
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})

export class LoginComponent {

        loginData = {
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
            this.apiService.loginUser(this.loginData).then(resData => {
                if (resData.success) {
                    this.failMessage = '';
                    this.successMessage = 'Logging in...';
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
                return this.loginData = resData;
            });
        }
    }
}