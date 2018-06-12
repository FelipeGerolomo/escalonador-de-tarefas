import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { NgxGaugeModule } from 'ngx-gauge';
import { InlineSVGModule } from 'ng-inline-svg'; //excluir
import { AngularSvgIconModule } from 'angular-svg-icon';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ChooseAlgorithmComponent } from './pages/choose-algorithm/choose-algorithm.component';
import { ExecuteComponent } from './pages/execute/execute.component';

import { TaskSchedulerService } from './services/task-scheduler.service';
import { CpuSvgComponent } from './components/svg/cpu-svg/cpu-svg.component';

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
    CpuSvgComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    NgxGaugeModule,
    InlineSVGModule.forRoot(),
    AngularSvgIconModule
  ],
  providers: [TaskSchedulerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
