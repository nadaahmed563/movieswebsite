import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/user/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;

  constructor(public _AccountService: AccountService) { }

  ngOnInit(): void {
    this._AccountService.userSubject.subscribe(() => {
      if (this._AccountService.userSubject.getValue() != null) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    })
  }

}
