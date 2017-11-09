import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest} from '@angular/common/http';

    @Injectable()
    export class DemoInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
            console.log('http request intercepted');
            return next.handle(req);
        }
    }