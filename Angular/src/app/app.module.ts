import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { UserContemplationListComponent } from 'src/app/user/user-contemplation-list/user-contemplation-list/user-contemplation-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserContemplationListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
