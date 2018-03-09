import { Component, OnInit ,Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Dashboard } from '../dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	  public taskname: string;
  public description: string;
  public date: string;
   @Input()

  public todo: Dashboard;


  constructor(private dashboardService: DashboardService) { 

  	this.taskname = '';

  	this.description = '';
  	this.date = '';
  }

  ngOnInit() {
  }

  private addTodo(): void {
		console.log("b");
    this.dashboardService.addTodo(this.taskname , this.description , this.date);
    
  	this.taskname = '';

  	this.description = '';
  	this.date = '';

}



  private removeTodo(id: number): void {
    alert(id);
    this.dashboardService.removeTodo(id);
  }

 key: string = 'taskname'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;


}
}