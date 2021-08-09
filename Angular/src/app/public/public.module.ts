import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})
export class PublicModule { }
