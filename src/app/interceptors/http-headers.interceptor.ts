import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': '7c2c8e9a77mshdd03a10083eaae3p14894ajsn17a09940767a'
      },
      setParams:  {
        key:  '857c7d32fa4e42458ae95ac6d36d5bb7'
      }
    });
    return  next.handle(request);
  }
}
