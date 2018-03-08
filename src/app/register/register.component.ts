import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name: string;
  public email: string;
  public password: string;



  constructor(private registerService: RegisterService) {
    this.name = '';
    this.email = '';
    this.password='';
  }

  ngOnInit() {
  }

	private addRegister(): void {
		console.log("A");
    this.registerService.addRegister(this.name , this.email , this.password);
    this.name = '';
    this.email = '';
    this.password ='';
    

}
}
