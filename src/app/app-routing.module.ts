import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FolderComponentComponent } from './components/folder-component/folder-component.component';

const routes: Routes = [
  {path: '', redirectTo: '/folders', pathMatch:'full'},
  {path: 'folders',component : FolderComponentComponent},
  {path: '**', redirectTo: '/folders', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


