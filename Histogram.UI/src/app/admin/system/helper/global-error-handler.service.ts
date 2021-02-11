import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ObservableInput, throwError } from 'rxjs';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  // tslint:disable-next-line: typedef
  globalHandleError(error: any) {
    const router = this.injector.get(Router);
    console.log('URL: ' + router.url);

    if (error instanceof HttpErrorResponse) {
      // Backend returns unsuccessful response codes such as 404, 500 etc.
      console.error('Backend returned status code: ', error.status);
      console.error('Response body:', error.message);
    } else {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.message);
    }
    // router.navigate(['/error']);
  }

  handleError(err: HttpErrorResponse): ObservableInput<any> {
    const router = this.injector.get(Router);
    console.log('URL: ' + router.url);

    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errormessage = '';
    if (err.error instanceof ErrorEvent) {
      // a client-side or network error occurred. handle it accordingly.
      errormessage = `an error occurred: ${err.error.message}`;
    } else {
      // the backend returned an unsuccessful response code.
      // the response body may contain clues as to what went wrong,
      errormessage = `server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errormessage);
    // router.navigate(['/error']);
    return throwError(errormessage);
  }
}
