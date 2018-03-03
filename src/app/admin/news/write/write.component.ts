import { Component, OnInit } from '@angular/core';
import {NewsVO} from '../../../domain/news.vo';
import {AdminService} from '../../admin.service';
import {ResultVo} from '../../../domain/result.vo';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  news = new NewsVO();   // 입력 폼과 바인딩하는 객체
  fileList: FileList;

  constructor(private adminService: AdminService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
  }

  addNews() {
    this.adminService.addNews(this.news)
      .subscribe((body: ResultVo) => {
        console.log(body);
        // 정상적인 처리가 될 경우 스낵바로 메시지 띄우고, 목로으로 들어가기
        if(body.result === 0) {
          this.snackBar.open('등록되었습니다.', null, {duration: 2000});
          this.router.navigateByUrl('/admin/news');
        }
      });
  }

  fileChange(event: any) {
    this.fileList = event.target.files;

    // 파일 읽기
    const reader = new FileReader();
    reader.readAsDataURL(this.fileList[0]);

    // 로딩 완료 후
    reader.onload = () => {
      // 비동기로 서버에 업로드 바로 실행

    };
  }
}
