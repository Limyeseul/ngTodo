import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  naverUrl: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getSocial('naver2')
      .subscribe(body => {
        this.naverUrl = body['site'];
      });
  }

}
