import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public userSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;
  isLogin:boolean = false;

  constructor(private router: Router, private _http: HttpClient,) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }
  public get userValue(): User {
    return this.userSubject.value;
  }

  sendRegistrationData(data: Object) {
    return this._http.post<Response>(`${environment.apiUrl}/api/register`, data)
  }
  login(data: Object) {
    return this._http.post<User>(`${environment.apiUrl}/api/login`, data)
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        this.router.navigate(['/movies']);
        return user;
      }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null!);
    this.router.navigate(['/']);
    !this.isLogin
  }
}
