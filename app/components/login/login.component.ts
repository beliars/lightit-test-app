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
		userReg: Object;
		userLogin: Object;
		token: string;
		message;

	constructor(private apiService: ApiService, private router: Router) {
		this.userReg = {};
		this.message = {};
		this.token = '';
	}

	register(event, username, password) {

		this.message = {};
		let usernameInput = document.querySelector('input[type="text"]');
		let passwordInput = document.querySelector('input[type="password"]');

		if (username !== '' && password !== '') {

			event.preventDefault();

			let userData = {
				"username": username,
				"password": password
			};

			this.apiService.regUser(userData).subscribe(userReg => {
				console.log(userReg);
				if (userReg.success) {
					this.message.success = 'Registration successfull. Logging in...';
					this.token = userReg.token; 
					console.log('User token is ' + this.token);
					let link = ['/products'];
					setTimeout(() => {
       					this.router.navigate(link);
					}, 2000);
				} 
				else {
					this.message.error = userReg.message;
					usernameInput.focus();
					passwordInput.value = '';

				}
				return this.userReg = userReg;
			});
		}
	}

	login(event, username, password) {

		this.message = {};
		let usernameInput = document.querySelector('input[type="text"]');
		let passwordInput = document.querySelector('input[type="password"]');

		if (username !== '' && password !== '') {

			event.preventDefault();

			let userData = {
				"username": username,
				"password": password
			};

			this.apiService.loginUser(userData).subscribe(userLogin => {
				console.log(userLogin);
				if (userLogin.success) {
					this.message.success = 'Logging in...';
					this.token = userLogin.token; 
					console.log('User token is ' + this.token);
					let link = ['/products'];
					setTimeout(() => {
       					this.router.navigate(link);
					}, 2000);
				} 
				else {
					this.message.error = userLogin.message;
					usernameInput.focus();
					passwordInput.value = '';

				}
				return this.userLogin = userLogin;
			});
		}
	}
}