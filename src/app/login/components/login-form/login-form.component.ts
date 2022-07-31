import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/user/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  message:any;

  constructor(private router: Router, public _AccountService: AccountService) { }

  ngOnInit(): void {
  }
  // login-form submit method
  ngSubmit(formValue: FormData) {
    this._AccountService.login(formValue).subscribe((res: any) => {
      if (res.status == 'success') {
        this.message = res.message;
        this.router.navigate(['\movies']);
      } else {
        this.message = "Email or Password Incorrect!"
      }
    }, error => {
      this.message = "Email or Password is Incorrect!"
    })
  }

}
