import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/user/account.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  message:any;

  constructor(private router: Router, public _AccountService: AccountService) { }

  ngOnInit(): void {
  }
  ngSubmit(formValue: FormData){
    console.log(formValue);
    this._AccountService.sendRegistrationData(formValue).subscribe((res:any) =>{
      console.log(res);
      if (res.status == 'success') {
        this.message = res.message;
        this.router.navigate(['\login']);
      }else{
        this.message = res.message.email
      }
      
    })
  }

}
