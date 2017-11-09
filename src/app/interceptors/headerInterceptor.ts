import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

    @Injectable()
    export class HeaderInterceptor implements HttpInterceptor {
        
        constructor(private _authSvc: AuthService) {}
        
        intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
            console.log('http request intercepted: Adding Authentication');

            req = req.clone({
                setHeaders: { 
                    Authorization: `Bearer ${this._authSvc.getToken()}`
                }
            });

            return next.handle(req);
        }
    }