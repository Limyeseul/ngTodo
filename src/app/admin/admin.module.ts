import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin-routing';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [AdminComponent, HomeComponent, NewsComponent]
})
export class AdminModule { }
