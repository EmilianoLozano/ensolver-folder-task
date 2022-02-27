import { HttpClient } from '@angular/common/http';
import { Injectable, Output,EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderServiceService {

  private BackUrl = 'https://localhost:7211/'; 

  private apiUrl = 'api/folders/'; 
  
  constructor(private http : HttpClient) { }


  getListFolders() : Observable <any> {
    return this.http.get(this.BackUrl + this.apiUrl);
  }

  addFolder(folder : any) : Observable <any>{
    return this.http.post(this.BackUrl + this.apiUrl, folder);
  }

  deleteFolder(id : number) : Observable <any>{
    return this.http.delete(this.BackUrl + this.apiUrl + id);
  }

  viewFolder(id: number ) : Observable <any> {
    return this.http.get(this.BackUrl + this.apiUrl + id + '/tasks' );
  }
    
  @Output() addTasks : EventEmitter<any> = new EventEmitter();


}
