import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ChooseAlgorithmComponent } from './pages/choose-algorithm/choose-algorithm.component';
import { ExecuteComponent } from './pages/execute/execute.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'task', component: CreateTaskComponent },
  { path: 'execute', component: ExecuteComponent },
];





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreateTaskComponent,
    ChooseAlgorithmComponent,
    ExecuteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
