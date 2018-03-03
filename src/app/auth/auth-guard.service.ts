import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user.service';
import {JwtHelper} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class AuthGuardService implements CanLoad, CanActivate, CanActivateChild {
  private jwtHelper: JwtHelper;   // jwt 유틸리티 객체
  redirectUrl: string;            // 로그인 후 이동할 url

  constructor(private router: Router,
              private userService: UserService,
              /*public afAuth: AngularFireAuth*/) {
    this.jwtHelper = new JwtHelper();
  }


  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    // throw new Error('Method not implemented.');

    if (this.isAdmin) { // 관리자면 true
      return true;
    }

    this.redirectUrl = '/admin';
    this.router.navigateByUrl('/login');
    return false;
  }

  // 특정 페이지를 보여주거나 차단함.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  // 단순 canActivate 호출
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }


  isAdmin() {
    const token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      if (this.jwtHelper.decodeToken(token).sub.indexOf('admin') >= 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkLogin(url: string): boolean {
    const token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    this.redirectUrl = url;
    this.router.navigateByUrl('/login');
    return false;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    // 스토리지에 저장된 토큰 정보와 인증 정보를 삭제
    localStorage.removeItem('token');

    this.redirectUrl = null;
    this.router.navigateByUrl('/');
  }

}
