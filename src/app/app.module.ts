import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*import { RouterModule } from '@angular/router'; */
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent }
 
  /*{ path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' } },*/
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
    {path: '/', component: LoginComponent },
      {path: 'register', component: RegisterComponent },
      {path: 'dashboard', component: DashboardComponent }*/