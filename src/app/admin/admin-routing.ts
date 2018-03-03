import {Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {ViewComponent} from './news/view/view.component';
import {WriteComponent} from './news/write/write.component';

export const adminRoutes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'news', component: NewsComponent, children: [
          // path는 2가지 방법이 있다.
          // 쿼리 파라미터 view?news_id=xxx
          // uri 파라미터 view/:news_id  더 동적스럽다. (ex. view/1/2/3 ...)
          {path: 'view/:news_id', component: ViewComponent},
          {path: 'write', component: WriteComponent}
        ]}
    ]}
];
