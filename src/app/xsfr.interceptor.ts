import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class XSFRInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cookieheaderName = 'X-XSRF-TOKEN';
    let csrfToken = this.tokenExtractor.getToken() as string;
    if (csrfToken !== null && !request.headers.has(cookieheaderName)) {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'text/plain',
        'X-XSRF-TOKEN' : csrfToken.toString() }),
        withCredentials: true, 
        observe: 'response' as 'response'
      };
      
      request = request.clone(httpOptions)
      //console.log("salida request " + JSON.stringify(request));
      //request = request.clone({ withCredentials: true,  headers:  request.headers.set(cookieheaderName, csrfToken)  });
    }

    return next.handle(request);
  }

}
  

