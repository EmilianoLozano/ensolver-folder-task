import { Component, Input, OnInit } from '@angular/core';

import { FolderServiceService } from '../../services/folder-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-folder',
  templateUrl: './list-folder.component.html',
  styleUrls: ['./list-folder.component.css']
})
export class ListFolderComponent implements OnInit {

  listFolders: any[]  = [];
  listTasks: any[]  = [];

  nameTask : String;
  constructor(private _folderService : FolderServiceService,
    private router : Router) {
    this.nameTask ="";
   }
   
  ngOnInit(): void {
    this.getFolders();

  }
    
  getFolders(){
    this._folderService.getListFolders().subscribe(data => {
      this.listFolders = data;

    },error => {
      console.log(error);
    }) 
  }


  deleteFolder(id : number){
    this._folderService.deleteFolder(id).subscribe ( data => {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    }, error => {
      console.log(error);
      
    })
  }

  viewFolder(id:number,name:string)  {
     this._folderService.viewFolder(id).subscribe(data =>{

      let idFolder = id;
      let nameFolder = name;
      this.listTasks=[];

      this.listTasks.push(data);
      
      this._folderService.addTasks.emit({
        data : this.listTasks[0], idFolder,nameFolder
       
      });
      
    })
  }



}
