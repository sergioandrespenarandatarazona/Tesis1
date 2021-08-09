import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContemplationListComponent } from './user-contemplation-list/user-contemplation-list.component';
import { UserPauseListComponent} from './user-pause-list/user-pause-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contemplationList'},
  {path: 'contemplationList', component: UserContemplationListComponent},
  {path: 'pauseList', component: UserPauseListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
