import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';

import { ListFolderComponent } from './components/list-folder/list-folder.component';

import { FolderComponentComponent } from './components/folder-component/folder-component.component';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    CreateTaskComponent,
    NavBarComponent,
    CreateFolderComponent,
    ListFolderComponent,
    FolderComponentComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
