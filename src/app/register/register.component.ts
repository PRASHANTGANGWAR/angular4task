import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


 submitAttempt = false;
 
     
 
      submit(){

        this.registerService.addRegister(this.name , this.email , this.password);
    this.name = '';
    this.email = '';
    this.password ='';
     console.log('success!');


     alert("c");
      }



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

    this.submitAttempt = true;// validation
alert("A");
		console.log("A");
    this.registerService.addRegister(this.name , this.email , this.password);
    this.name = '';
    this.email = '';
    this.password ='';
    alert("b");

}
}
