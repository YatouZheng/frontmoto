import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';;

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RightscreenComponent } from './rightscreen/rightscreen.component';
import { BoardlistComponent } from './boardlist/boardlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './meterial/meterial.module';



@NgModule({
  declarations: [ 
    AppComponent, 
    NavbarComponent, 
    LoginComponent, 
    SideNavComponent, 
    RightscreenComponent, BoardlistComponent 
  ],
  imports: [ 
    BrowserModule, 
    HttpClientModule, 
    FormsModule, BrowserAnimationsModule,
    MeterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
