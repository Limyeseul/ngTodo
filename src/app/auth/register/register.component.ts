import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MemberVO} from '../../domain/member.vo';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {UserService} from '../../user.service';
import {AuthGuardService} from '../auth-guard.service';
import {Router} from '@angular/router';
import {ResultVO} from '../../domain/result.vo';

declare var $: any ; // ngOnInit => jquery 선언

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  member: MemberVO;

  constructor(private snackBar: MatSnackBar,
              private userService: UserService,
              private authGuard: AuthGuardService,
              private router: Router,
              private fb: FormBuilder) {

    // this.config = new MatSnackBarConfig();
    // this.config.duration = 3000;
    this.form = this.fb.group({
      nickname: new FormControl(null, [Validators.required, Validators.minLength(4)]),  // 반드시 입력, 4자 이상 입력
      isTerm: new FormControl(null, [Validators.required]),
      isInfo: new FormControl(null, [Validators.required]),
      postcode: new FormControl(null),
      address: new FormControl(null),
      birthday: new FormControl(null),
    });
  }

  ngOnInit() {
    this.member = JSON.parse(localStorage.getItem('member'));

    // html에 id가 postcode에 팝업 띄우기
    $('#postcode').postcodifyPopUp();

  }

  register() {
    this.form.controls['postcode'].setValue($('.postcodify_postcode5').val());
    this.form.controls['address'].setValue($('.postcodify_address').val());

    if (!this.form.controls['isTerm'].value) {
      this.snackBar.open('이용약관에 동의하세요.', null, {duration: 2000});
      return;
    }
    if (!this.form.controls['isInfo'].value) {
      this.snackBar.open('개인정보이용에 동의하세요.', null, {duration: 2000});
      return;
    }
    if (!this.form.valid) {
      this.snackBar.open('붉은색 부분을 확인하세요.', null, {duration: 2000});
      return;
    }

    // 서버 연동하여 회원가입
    this.member.nickname = this.form.controls['nickname'].value;
    this.userService.signUp(this.member)
      .subscribe((res: ResultVO) => {
        if (res.result === 0) { // 회원 가입이 성공하면 토큰을 저장하고 이동한다.
          localStorage.setItem('token', res.data['token']);
          // 페이지 리프레쉬
          // if (this.authGuard.redirectUrl) {
          //   this.router.navigateByUrl(this.authGuard.redirectUrl);
          // } else {
            this.router.navigateByUrl('/');
          // }
        } else if (res.result === 100) {
          this.snackBar.open('닉네임이 중복입니다.', null, {duration: 2000});
        } else {
          this.snackBar.open('회원가입에 실패하였습니다.', null, {duration: 2000});
        }
      });
  }

}
