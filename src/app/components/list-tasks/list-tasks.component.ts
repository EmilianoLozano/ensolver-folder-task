import { Component, OnInit } from '@angular/core';

import { TaskServiceService } from '../../services/task-service.service';
import { FolderServiceService } from '../../services/folder-service.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
   
  listTasks : any[] = [];

  nameTask : String;

  idFolder : number;

  nameFolder: string;

  idTask : number;

  editTask : boolean;

  stateTask: boolean;


  constructor(private _taskService : TaskServiceService,
    private _folderService : FolderServiceService,
    private router : Router,
    public _location: Location) {
    this.nameTask ="";
    this.idFolder = 0;
    this.idTask= 0;
    this.editTask=false;
    this.stateTask = false;
    this.nameFolder = '';
   
  }

  ngOnInit(): void {
    
    this._folderService.addTasks.subscribe(data =>{
     this.listTasks = [];
     this.listTasks.push(data.data);
     this.idFolder=data.idFolder; 
     this.nameFolder=data.nameFolder;
      console.log(data);
    })
   
  }
  
  updateTask (task : any ){
    
    this.editTask=true;

    this.idTask = task.id;

    this.nameTask = task.nameTask;
   let idFolders = this.idFolder;


    this._taskService.updatedata.emit({
      data : task ,  idFolders
     
    });
   
  
  }

  cancel(){
    
    this.editTask=false;

  }

  ConfirmUpdateTask(){

    const task : any = {
      nameTask : this.nameTask
    }

      this._taskService.updateTask(this.idFolder,this.idTask, task).subscribe( data =>{
        this.editTask=false;
        this.reloadCurrentRoute(); 

    }, error => {
      console.log(error);
    })
  }

  updateState(stateTask: any){

    this.idTask = stateTask.id;

    this.stateTask = stateTask.stateTask;

    this.nameTask = stateTask.nameTask;

    if(this.stateTask)
      this.stateTask=false;
    else
      this.stateTask=true;


    const task : any = {
      nameTask : this.nameTask,
      stateTask : this.stateTask
    }

    this._taskService.updateTask(this.idFolder,this.idTask, task).subscribe( data =>{
   
      this.reloadCurrentRoute();
   

    }, error => {
      console.log(error);
    })
  }

  
  DeleteTask(id : number){
    this._taskService.deleteTask(this.idFolder,id).subscribe ( data => {
      this.reloadCurrentRoute();  
    }, error => {
      console.log(error);
      
    })
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }


}
