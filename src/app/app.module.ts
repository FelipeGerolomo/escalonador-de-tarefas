import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { NgxGaugeModule } from 'ngx-gauge';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ChooseAlgorithmComponent } from './pages/choose-algorithm/choose-algorithm.component';
import { ExecuteComponent } from './pages/execute/execute.component';

import { TaskSchedulerService } from './services/task-scheduler.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'task', component: CreateTaskComponent },
  { path: 'execute', component: ExecuteComponent },
  { path: 'algorithm', component: ChooseAlgorithmComponent },
];





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreateTaskComponent,
    ChooseAlgorithmComponent,
    ExecuteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    NgxGaugeModule
  ],
  providers: [TaskSchedulerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
