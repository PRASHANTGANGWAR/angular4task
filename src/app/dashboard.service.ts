import { Injectable } from '@angular/core';
import { Dashboard } from '../app/dashboard';
import { Router } from "@angular/router";

@Injectable()
export class DashboardService {
private nextId: number;

  constructor() {
    let todos = this.getTodos();
  

    if (todos.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = todos[todos.length-1].id;
      this.nextId = maxId + 1;
    }

  }


  public addTodo(taskname: string ,description:string, date:string): void {
    let todo = new Dashboard(this.nextId, taskname ,description ,date);
    let todos = this.getTodos();
    todos.push(todo);

    // save the todos to local storage
    this.setLocalStorageTodos(todos);
    this.nextId++;
  }

  public getTodos(): Dashboard[] {
    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }

  public removeTodo(id: number): void {
    let todos = this.getTodos();
    todos = todos.filter((todo)=> todo.id != id);
    this.setLocalStorageTodos(todos);
  }

  // private function to help save to local storage
  private setLocalStorageTodos(todos: Dashboard[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }));
  }
}