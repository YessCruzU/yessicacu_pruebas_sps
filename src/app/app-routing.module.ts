import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from '../app/page/notes/notes.component'
import { UsersComponent } from '../app/page/users/users.component'
import { FormUserComponent } from '../app/components/form-user/form-user.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user', component: UsersComponent },
  { path: 'home', component: NotesComponent },
  
  { path: 'm', component: FormUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent,NotesComponent, FormUserComponent,]
