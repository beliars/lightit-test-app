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

        loginData = {
			username: '',
			password: ''
		};
		resData = {};
		message: string;

	constructor(private apiService: ApiService, private router: Router) {
	}

    onSubmit(form, usernameInput) {
        if (form.valid) {
            this.apiService.loginUser(this.loginData).then(resData => {
                console.log(resData);
                if (resData.success) {
                    this.message = 'Logging in...';
                    let link = ['/products'];
                    setTimeout(() => {
                        this.router.navigate(link);
                    }, 2000);
                }
                else {
                    this.message = resData.message;
                    usernameInput.focus();
                    this.loginData.password = '';
                }
                return this.loginData = resData;
            });
        }
    }
}