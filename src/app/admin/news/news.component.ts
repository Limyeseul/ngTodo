import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {NewsVO} from '../../domain/news.vo';
import {PageVO} from '../../domain/page.vo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList: NewsVO[];   // Array<NewsVo>
  page: PageVO;

  constructor(private adminService: AdminService, private router: Router) {

    // 여기서 pageVO 생성자를 하면 나중에 리펙토링시 중복될 수 있으니 여기다 하지말고 PageVO 생성할때 바로 하자.
    this.page = new PageVO(0, 5, 0, [5, 15, 30, 60, 90]);
    // this.page.pageIndex = 0;
    // this.page.pageSize = 5;
    // this.page.totalCount = 0;
    // this.page.pageSizeOptions = [5, 15, 30, 60, 90];
  }

  ngOnInit() {
    this.findNews();
  }

  // 페이지가 변경될 때마다 ngOnInit()을 해야한다.
  findNews() {
    const params = {
      start_index: this.page.pageIndex * this.page.pageSize,
      page_size: this.page.pageSize
    }
    this.adminService.findNews(params).subscribe(body => {
      this.newsList = body['data'];
      this.page.totalCount = body['total'];
      console.log(this.newsList);
    });
  }

  // 페이지 넘길때마다 변경되는 프로토 타입
  pageChanged(event: any) {
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.findNews();
  }

  gotoView(item: NewsVO) {
    this.router.navigateByUrl(`/admin/news/view/${item.news_id}`);
  }

  gotoWrite() {
    this.router.navigateByUrl(`/admin/news/write`);
  }
}
