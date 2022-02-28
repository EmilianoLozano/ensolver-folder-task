import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FolderServiceService } from '../../services/folder-service.service';

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.css']
})
export class CreateFolderComponent implements OnInit {

  nameFolder : string;

  message = false;

  constructor(private _folderService : FolderServiceService,
    private router : Router) { 
    this.nameFolder= '';

  }

  ngOnInit(): void {
  }

  
  addFolder(){

    const folder = {
      nameFolder: this.nameFolder
    }
    if(this.nameFolder == '')
    {
      this.message=true;
    }
    else{
              
        this._folderService.addFolder(folder).subscribe( data =>{
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);

          this.nameFolder="";
        }, error => {
        
        })
        }
    }







}
