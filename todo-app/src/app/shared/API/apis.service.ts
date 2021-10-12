import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { taskClass } from '../Class/task';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  configURL = "http://localhost:3000/newTasks";
  ProgressConfigURL = "http://localhost:3000/progressTasks";
  doneConfigURL = "http://localhost:3000/doneTasks";
  constructor(private http:HttpClient) { }

  // get Tasks
  getNewTask(){
    return this.http.get(this.configURL);
  }
  getProgressTask(){
    return this.http.get(this.ProgressConfigURL);
  }
  getDoneTask(){
    return this.http.get(this.doneConfigURL);
  }

  // Add Tasks
  post(obj : taskClass){
    return this.http.post(this.configURL , obj);
  }

  // Update Tasks
  update(obj,id){
    let url = this.configURL + "/"+ id;
    return this.http.put(url,obj)
  }
  updateProgress(obj,id){
    let url = this.ProgressConfigURL + "/"+ id;
    return this.http.put(url,obj)
  }
  updateDone(obj,id){
    let url = this.doneConfigURL + "/"+ id;
    return this.http.put(url,obj)
  }
}
