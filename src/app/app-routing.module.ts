import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HomeComponent} from './home/home.component';
import {JqueryComponent} from './jquery/jquery.component';

// const [변수]: [타입] :: es6에서 나온 키워드지만 ts문법에 들어감, 지역변수의 개념이 있다.
// 리터널 객체로 바로 객체를 할당해준다.
// commonJs에서 남의 모듈을 가져오는 것을 require(=import)
// 내 모듈 배포는 export
export const routes: Routes = [
      // 사용자화면
      // 부모가 path a라면 children path와 연결이 된다. [ip:4200/a/jquery]
      // 만약 부모path가 공백이라면 부모path는 생략되어 [ip:4200/jquery] 가 된다.
      {path: '', component: IndexComponent, children: [
      // 부모 index도 공백이고 자식 home도 공백이면 부모가 먼처 출력된 후 home이 출력이 되는 것이다.
      {path: '', component: HomeComponent},
      // path가 jquery면 컴포넌트는 JqueryComponent 호출하여 route-outlet에 주입하라.
      {path: 'jquery', component: JqueryComponent},
    ]},
  // 향후 관리자 생성 모듈
  // 이 내용은 사용자 화면 띄운 후에 나중에 뜨는 모듈이다.
  // {path: 'admin', loadChilren: 'app/admin/admin.module#AdminModule'}
];
