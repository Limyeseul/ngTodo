import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin-routing';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatPaginatorModule,
  MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AdminService} from './admin.service';
import { ViewComponent } from './news/view/view.component';
import { WriteComponent } from './news/write/write.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {FormsModule} from '@angular/forms';
import { ViewDialogComponent } from './news/view-dialog/view-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    CKEditorModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
  ],
  declarations: [AdminComponent, HomeComponent, NewsComponent, ViewComponent, WriteComponent, ViewDialogComponent],
  providers: [AdminService],
  // 다이어로그 이용시 entry컴포넌트에 추가를 해야지만 화면에 나온다.
  entryComponents: [ViewDialogComponent]
})
export class AdminModule { }
