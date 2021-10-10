import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AddTaskComponent } from './sites/add-task/add-task.component';
import { HomeComponent } from './sites/home/home.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "Home", component: HomeComponent},
  {path: "add", component: AddTaskComponent},
  {path: "add-task", component: AddTaskComponent},
  {path: "Add", component: AddTaskComponent},
  {path: "Add-Task", component: AddTaskComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
