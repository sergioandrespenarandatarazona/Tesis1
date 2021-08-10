import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './user-routing.module';
import { UserContemplationListComponent } from './user-contemplation-list/user-contemplation-list.component';
import { UserPauseListComponent} from './user-pause-list/user-pause-list.component';
import { PublicModule } from '../public/public.module';
import { ContemplationComponent } from './contemplation/contemplation.component';
import { DiaReflexionComponent } from './dia-reflexion/dia-reflexion.component';
import { WritePausaComponent } from './write-pausa/write-pausa.component';
import { WriteReflexionComponent } from './write-reflexion/write-reflexion.component';
import { PausaComponent } from './pausa/pausa.component';



@NgModule({
  declarations: [
    UserContemplationListComponent, 
    UserPauseListComponent, ContemplationComponent, DiaReflexionComponent, WritePausaComponent, WriteReflexionComponent, PausaComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
