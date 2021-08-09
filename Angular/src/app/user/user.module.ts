import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './user-routing.module';
import { UserContemplationListComponent } from './user-contemplation-list/user-contemplation-list.component';
import { UserPauseListComponent} from './user-pause-list/user-pause-list.component';
import { PublicModule } from '../public/public.module';



@NgModule({
  declarations: [
    UserContemplationListComponent, 
    UserPauseListComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
