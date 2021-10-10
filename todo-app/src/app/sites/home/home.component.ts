import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { ApisService } from 'src/app/shared/API/apis.service';
import { taskClass } from 'src/app/shared/Class/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headline;
  details;
  oppendID;
  task : taskClass;
  newTasks : any = [];
  
  constructor(private http:ApisService) {  
    http.get().subscribe((data: any)=>{
      this.newTasks = data;
      
    })
  }

  ngOnInit(): void {
  }

  clsTaskViewer(){
    $(".TaskView").fadeOut();
  }
  
  intializeTaskEdit(){
    this.task;
  }

  periority(ev,color){
    const BTNs = document.querySelectorAll<HTMLElement>('.viewer .options .status button');
    for(let x=0;x<4;x++){
      BTNs[x].style.backgroundColor = "transparent";
    }
    ev.target.style.backgroundColor = color;
    this.task.priority = color;
  }

  openTaskViewer(id){
    this.oppendID = id;
    this.headline = this.newTasks[id-1].headline;
    this.details = this.newTasks[id-1].details;
    this.newTasks[id-1].seen = true;
    this.http.update(this.newTasks[id-1],id).subscribe((data)=>{})
    $(".TaskView").fadeIn();
  }

  allowDrop(ev) {
    ev.preventDefault();
  }
  
  drag(ev,id) {
    ev.dataTransfer.setData("value", ev.target.id);
  }
  
  drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("value");
    this.getParent(ev,data);
  }

  getParent(ev,data){
    let x;
    let sellectors = document.querySelectorAll("div.tasks");
    for(let i = 0 ;i<3;i++){
      x  = ev.path.indexOf(sellectors[i])
      if(x != -1){
        ev.path[x].appendChild(document.getElementById(data));
      }
    }
  }


}
