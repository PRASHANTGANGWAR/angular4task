import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*import { RouterModule } from '@angular/router'; */
import { RouterModule, Routes } from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service'; // for local storage , import the module

import { RegisterService } from './register.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoItemComponent } from './todo-item/todo-item.component';




const appRoutes: Routes = [
{ path: '', component: LoginComponent },
{path: 'register', component: RegisterComponent ,data: { title: 'register' } },
{ path: 'dashboard', component: DashboardComponent },
{ path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  RegisterComponent,
  DashboardComponent,
  TodoItemComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot(appRoutes),
  StorageServiceModule
  ],
  providers: [
  RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
