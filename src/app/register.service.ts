import { Injectable } from '@angular/core';
import { Register } from '../app/register';
import { Login } from '../app/login';
import { Router } from "@angular/router";



@Injectable()
export class RegisterService {
  private nextId: number;

  constructor(private router: Router) { 
    alert("in reg service");

    let reg = this.getRegister();
    if (reg.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = reg[reg.length-1].id;
      this.nextId = maxId + 1;
    }
  }


  public addRegister(name: string , email:string , password: string): void {
    alert("in reg service add function");

   let register = new Register(this.nextId, name ,email , password);
    let reg = this.getRegister();
    reg.push(register);

    // save the todos to local storage
   this.setLocalStorageTodos(reg);
    this.nextId++;
    this.router.navigate(['/']);;

 
/*000000000000000000000000000000000000000000000000000*/
/*var count=0;

    if(reg.length == 0)
    {
   
        this.setLocalStorageTodos(reg);
    this.nextId++;
    this.router.navigate(['/']);


   }

   else
   {
     for(var i = 0 ; i < reg.length ; i++)
     {
         if(reg[i].email == email)
         {
          count++;
      }

  }
  if(count == 0)
  {

        this.setLocalStorageTodos(reg);
    this.nextId++;
    this.router.navigate(['/']);

            }
        }



        if (count == 1) {
          //form.email.$error.validationError = true;

          
      }

      else {
         // form.email.$error.validationError = false;
         
      }

*/
  };
  /*BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB*/


public getRegister(): Register[] {
  let localStorageItem = JSON.parse(localStorage.getItem('reg'));
  return localStorageItem == null ? [] : localStorageItem.reg;
}
private setLocalStorageTodos(reg: Register[]): void {
  localStorage.setItem('reg', JSON.stringify({ reg: reg }));
}


public logincheck(email: string , password: string)
{

  if(email!="" && password!="")
  {

  let reg = this.getRegister();

  for (var i = reg.length - 1; i >= 0; i--) {

    if((reg[i].email) == email && (reg[i].password) == password)
    {
      console.log("in login function lop");
      alert("login sucessful");
      this.router.navigate(['/dashboard']);
      break;
    }

    else
    {
      alert("invalid credits")
      break;
    }

  }

}
else{
  alert("both fields are mandatory");

}
}
}
