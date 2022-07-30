import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AccountService } from '../../user/account.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _AccountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status) && this._AccountService.userValue) {
        // auto logout if 401 or 403 response returned from api
        this._AccountService.logout();
      }
      const error = err.error?.message || err.statusText;
      console.error(err);
      return throwError(error);
    }))
  }
}
