import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../admin.service';
import {NewsVO} from '../../../domain/news.vo';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  news: NewsVO;

  constructor(private route: ActivatedRoute, private adminService: AdminService) {
    // data 는 즉 news_id가 된다.
    this.route.params.subscribe(data => {
      console.log(data);
      // 글 상세보기 가져오기. string이니까 +붙여서 intger로 만든다.
      this.findDetailNews(+data['news_id']);
    });
  }

  ngOnInit() {
    // 게시판을 누를때마다 view 페이지가 바뀌고 index가 바뀌게 되는데 이때마다 view페이지를 생성, 파괴 하면 메모리 비효율적이기 때문에
    // 앵귤러에서는 한번만 init을 하여 news_id를 가지고 있다. 생성자만 한번 만들어 내고 ngOnInit()은 하지 않는다.
    console.log('init');
  }

  findDetailNews(news_id: number) {
    this.adminService.findDetailNews(news_id)
      .subscribe((body: NewsVO) => {
          console.log(body);
          this.news = body;
      });
  }
}
