import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApisService } from 'src/app/shared/API/apis.service';
import { taskClass } from 'src/app/shared/Class/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task = new taskClass;
  constructor(private http : ApisService,private Route:Router) { 
    this.task.priority = "rgb(224, 116, 14)";
    this.task.seen = false;
    this.task.details = "";
  }

  ngOnInit(): void {    
  }

  periority(ev,color){
    const BTNs = document.querySelectorAll<HTMLElement>('.addTask .addController .footer .priority button');
    for(let x=0;x<4;x++){
      BTNs[x].style.backgroundColor = "transparent";
    }
    ev.target.style.backgroundColor = color;
    this.task.priority = color;
  }

  save(){
    this.http.post(this.task).subscribe((data)=>{});
    this.Route.navigateByUrl("/Home")
  }
}
