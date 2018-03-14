import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


 submitAttempt = false;
 
     
 
     submit(){

        var flag = true;
        if(this.name=="" || this.email=="" || this.password=="")
    {
      alert("all fields are mandatory");
       flag = false;
      this.router.navigate(['register']);

    }

    if(flag)
    {
    this.registerService.addRegister(this.name , this.email , this.password);
    this.name = '';
    this.email = '';
    this.password ='';
  }

   /*     this.registerService.addRegister(this.name , this.email , this.password);
    this.name = '';
    this.email = '';
    this.password ='';*/
   //  console.log('success!');


      

 }

  public name: string;
  public email: string;
  public password: string;



  constructor(private registerService: RegisterService ,private router: Router) {
    this.name = '';
    this.email = '';
    this.password='';
  }

  ngOnInit() {
  }

	private addRegister(): void {

    var flag = true;

    this.submitAttempt = true;// validation
//alert("A");
	//	console.log("A");

    if(this.name=="" || this.email=="" || this.password=="")
    {
      //alert("all fields are mandatory");
       flag = false;
      this.router.navigate(['register']);

    }

    if(flag)
    {
    this.registerService.addRegister(this.name , this.email , this.password);
    this.name = '';
    this.email = '';
    this.password ='';
  }
   // alert("b");

}
}

