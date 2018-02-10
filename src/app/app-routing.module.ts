import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HomeComponent} from './home/home.component';
import {JqueryComponent} from './jquery/jquery.component';

// const [변수]: [타입] :: es6에서 나온 키워드지만 ts문법에 들어감, 지역변수의 개념이 있다.
// 리터널 객체로 바로 객체를 할당해준다.
// commonJs에서 남의 모듈을 가져오는 것을 require(=import)
// 내 모듈 배포는 export
export const routes: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent},
      {path: '', component: JqueryComponent},
    ]},
  // 향후 관리자 생성 모듈
  // {path: 'admin', loadChilren: 'app/admin/admin.module#AdminModule'}
];
