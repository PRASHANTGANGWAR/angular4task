import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regText: string;

  constructor(private registerService: RegisterService) {
    this.regText = '';
  }

  ngOnInit() {
  }

	private addRegister(): void {
		console.log("A");
		console.log(this.regText);

    this.registerService.addRegister(this.regText);
    this.regText = '';

}
}
