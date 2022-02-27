import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TaskServiceService } from '../../services/task-service.service';
import { FolderServiceService } from '../../services/folder-service.service';




@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  nameTask : string;
  listTasks = [];
  folderId : number;
  constructor(private _taskService : TaskServiceService,
    private router : Router,
    private _folderService : FolderServiceService) { 
    this.nameTask= '';
    this.folderId=0;
  }

  ngOnInit(): void {
  
    this._folderService.addTasks.subscribe(data =>{
      this.folderId=data.idFolder; 
       console.log(this.folderId);
     })

  }

  addTask(){


    const task = {
      nameTask: this.nameTask,
      stateTask : false
    }
        
  this._taskService.addTask(this.folderId,task).subscribe( data =>{
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    this.nameTask="";
  }, error => {
  
  })
  }


}
