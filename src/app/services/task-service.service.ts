import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private BackUrl = 'https://localhost:7211/'; 

  private apiUrl = 'api/folders/'; 

  constructor(private http : HttpClient) { }


    addTask(id:number , task : any) : Observable <any>{
      return this.http.post(this.BackUrl + this.apiUrl + id + '/tasks', task);
    }
   
   
   @Output() task : EventEmitter<any> = new EventEmitter();


   
  updateTask ( idFolder : number ,idTask : number , task : any) : Observable <any>{
    return this.http.put(this.BackUrl + this.apiUrl + idFolder + "/tasks/"+ idTask , task);
  }

  deleteTask(idFolder : number ,idTask : number ) : Observable <any>{
    return this.http.delete(this.BackUrl + this.apiUrl + idFolder + "/tasks/"+  idTask);
  }


  @Output() updatedata : EventEmitter<any> = new EventEmitter();




}
