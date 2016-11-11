import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'rest-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})

export class AppComponent {

	title: string;

	constructor() {
		this.title = 'LightIT Test App';
	}
}