import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
	moduleId: module.id,
	selector: 'app-auth',
	templateUrl: 'auth.component.html',
	styleUrls: ['auth.component.css']
})

export class AuthComponent { 

	registerSelection = false;
	loginSelection = false;

	constructor(private apiService: ApiService, private router: Router) {
	}

	registerSelect(): void {
		this.registerSelection = true;
		this.loginSelection = false;
	}

	loginSelect(): void {
		this.loginSelection = true;
		this.registerSelection = false;
	}

	skipAuth(): void {
		this.apiService.clearUserInputData();
		this.router.navigate(['products']);
	}
}