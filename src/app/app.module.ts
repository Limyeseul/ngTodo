import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import {routes} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';


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
    MatMenuModule, /*<mat-menu>*/
    MatIconModule, /*<mat-icon>*/
    BrowserAnimationsModule, /*툴바 메뉴 클릭시 출력할 애니메이션*/
    MatButtonModule, /*버튼이 사각형으로 안보이고 뒷 버튼 배경이 투명하게*/
    FlexLayoutModule, /*툴바 메뉴를 flex할 수 있도록*/
    MatCardModule, /*jquery페이지에 카드형식모양으로 배열*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
