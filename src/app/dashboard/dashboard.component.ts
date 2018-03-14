import { Component, OnInit ,Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Dashboard } from '../dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  update= false;
  public taskname: string;
  public description: string;
  public date: string;

  public taskname1: string;
  public description1: string;
  public date1: string;
  public todoarray=[];

  public ID1 : Number;
  editItem
  @Input()

  public todo: Dashboard;


  constructor(private dashboardService: DashboardService) { 

  	this.taskname = '';

  	this.description = '';
  	this.date = '';
  }

  ngOnInit() {
  }




  private editTodo(ID:Number): void
  {
    alert(ID);
    this.update = true;

    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    this.todoarray= localStorageItem.todos;

    this.editItem = this.todoarray.filter(todoarray => todoarray.id == ID);


    this.taskname1=this.editItem[0].taskname;
    this.date1  =this.editItem[0].date;
    this.description1=this.editItem[0].description;
    this.ID1=this.editItem[0].id;

  }


  /*adddddddddddddddddd*/
  private addTodo(): void {
    alert("addtodo"+this.taskname);
    this.dashboardService.addTodo(this.taskname , this.description , this.date);
    
    this.taskname = '';

    this.description = '';
    this.date = '';

  }

 
  /*remnove*/
  private removeTodo(id: number): void {
    alert(id);
    this.dashboardService.removeTodo(id);
  }


  /*updade*/

  private updateTodo(id: number ): void {
    alert("id:: in updatetodo"+id);
    alert("dashboard updatetodo"+this.taskname)
    this.dashboardService.updateTodo(id ,this.taskname , this.description , this.date );


  }


 key: string = 'taskname'; //set default
 reverse: boolean = false;
 sort(key){
   this.key = key;
   this.reverse = !this.reverse;


 }
}




