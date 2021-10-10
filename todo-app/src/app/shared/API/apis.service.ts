import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { taskClass } from '../Class/task';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  configURL = "http://localhost:3000/Tasks";
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get(this.configURL);
  }

  post(obj : taskClass){
    return this.http.post(this.configURL , obj);
  }

  update(obj,id){
    let url = this.configURL + "/"+ id;
    return this.http.put(url,obj)
  }
}
