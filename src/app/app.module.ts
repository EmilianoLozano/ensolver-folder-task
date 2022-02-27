import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';

import { ListFolderComponent } from './components/list-folder/list-folder.component';

import { FolderComponentComponent } from './components/folder-component/folder-component.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    CreateTaskComponent,
    NavBarComponent,
    CreateFolderComponent,
    ListFolderComponent,
    FolderComponentComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
