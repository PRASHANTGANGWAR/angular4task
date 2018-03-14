import { Component } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';//use service to store data in local storage 
//import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';//use service to store data in  session
import { RegisterService } from './register.service';
import { DashboardService } from './dashboard.service';

import { Register } from './register';
import { Dashboard } from './dashboard';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private registerService: RegisterService ,dashboardService: DashboardService) {
	}


	
}


