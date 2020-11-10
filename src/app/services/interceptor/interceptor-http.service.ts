import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHttpService implements HttpInterceptor{

  constructor(
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth: string;
    let content: string;

    const token = (localStorage.getItem("accessToken")) ? localStorage.getItem("accessToken") : null;

    if (token && req.url.includes('bearer/')) {
      auth = 'Bearer ' + token;
      content = 'application/json';
    } else if (token && req.url.includes('token/')) {
      auth = 'Bearer ' + token;
      content = 'application/json';
    } else {
      auth = '';
      content = 'application/json';
    }
    const finalUrl = req.url.replace('bearer/', '').replace('token/', '');
    req = req.clone({
      url: finalUrl,
      setHeaders: {
        'Authorization': auth,
        'Content-Type': content,
        'Access-Control-Allow-Origin': '*'
      }
    });
    return next.handle(req);
  }

}
