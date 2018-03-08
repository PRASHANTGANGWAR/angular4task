import { Injectable } from '@angular/core';
import { Register } from '../app/register';
import { Login } from '../app/login';
import { Router } from "@angular/router";



@Injectable()
export class RegisterService {
 private nextId: number;

  constructor(private router: Router) { 

   let reg = this.getRegister();
    if (reg.length == 0) {
      this.nextId = 0;
      } else {
        let maxId = reg[reg.length-1].id;
        this.nextId = maxId + 1;
      }
}


public addRegister(name: string , email:string , password: string): void {




    let register = new Register(this.nextId, name ,email , password);
    let reg = this.getRegister();
    reg.push(register);

    // save the todos to local storage
    this.setLocalStorageTodos(reg);
    this.nextId++;
    this.router.navigate(['/']);

  }

  public getRegister(): Register[] {
    let localStorageItem = JSON.parse(localStorage.getItem('reg'));
    return localStorageItem == null ? [] : localStorageItem.reg;
  }

  /*public removeTodo(id: number): void {
    let reg = this.getRegister();
    reg = reg.filter((register)=> register.id != id);
    this.setLocalStorageTodos(reg);
  }*/

  // private function to help save to local storage
  private setLocalStorageTodos(reg: Register[]): void {
    localStorage.setItem('reg', JSON.stringify({ reg: reg }));
  }

 
  public logincheck(email: string , password: string)
  {
          let reg = this.getRegister();

         for (var i = reg.length - 1; i >= 0; i--) {

           if((reg[i].email) == email && (reg[i].password) == password)
           {
             console.log("in login function lop");
         alert("login sucessful");
           this.router.navigate(['/dashboard']);


         }
         else
         {
           alert("invalid credits")
         }

  }

  }


}
