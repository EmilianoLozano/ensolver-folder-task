import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-folder-component',
  templateUrl: './folder-component.component.html',
  styleUrls: ['./folder-component.component.css']
})
export class FolderComponentComponent implements OnInit {

  ver : boolean;
  
  constructor(private _taskService : TaskServiceService) {
    this.ver=false;
   }

  ngOnInit(): void {

  }

}
