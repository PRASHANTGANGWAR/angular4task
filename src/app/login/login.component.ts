import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	  public email: string;
	  public password: string;

  constructor(private registerService: RegisterService) {
    
    this.email = '';
    this.password='';
  }

  ngOnInit() {
  }

  private logincheck(): void {
		console.log("login check function in login component");
    this.registerService.logincheck( this.email , this.password);
    this.email = '';
    this.password ='';

}
}

