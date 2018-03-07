import { Injectable } from '@angular/core';
import { Register } from '../app/register';



@Injectable()
export class RegisterService {
 private nextId: number;

  constructor() { 

   let reg = this.getRegister();
    if (reg.length == 0) {
      this.nextId = 0;
      } else {
        let maxId = reg[reg.length-1].id;
        this.nextId = maxId + 1;
      }
}


public addRegister(text: string): void {
    let register = new Register(this.nextId, text);
    let reg = this.getRegister();
    reg.push(register);

    // save the todos to local storage
    this.setLocalStorageTodos(reg);
    this.nextId++;
  }

  public getRegister(): Register[] {
    let localStorageItem = JSON.parse(localStorage.getItem('reg'));
    return localStorageItem == null ? [] : localStorageItem.reg;
  }

  public removeTodo(id: number): void {
    let reg = this.getRegister();
    reg = reg.filter((register)=> register.id != id);
    this.setLocalStorageTodos(reg);
  }

  // private function to help save to local storage
  private setLocalStorageTodos(reg: Register[]): void {
    localStorage.setItem('reg', JSON.stringify({ reg: reg }));
  }

 
}
