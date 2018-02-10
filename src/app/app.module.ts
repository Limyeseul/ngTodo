import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import {routes} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule, /*<mat-toolbar>컴포넌트를 사용할 수 있다.*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
