import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-auth',
	templateUrl: 'auth.component.html',
	styleUrls: ['auth.component.css']
})

export class AuthComponent { 

	registerSelection = false;
	loginSelection = false;

	registerSelect(){
		this.registerSelection = true;
		this.loginSelection = false;
	}

	loginSelect(){
		this.loginSelection = true;
		this.registerSelection = false;
	}

}