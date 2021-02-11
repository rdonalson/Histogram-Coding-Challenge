import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { GlobalErrorHandlerService } from 'src/app/admin/system/helper/global-error-handler.service';
import { WordBox } from '../models/word-box';

@Injectable({
  providedIn: 'root'
})
export class BigramService {
  private histogramUrl = 'https://localhost:5001/api/histogram';

  constructor(
    private http: HttpClient,
    private err: GlobalErrorHandlerService
  ) {}

  getBigramCounts(phrase: string): Observable<WordBox[]> {
    const url = `${this.histogramUrl}/${phrase}`;
    return this.http.get<WordBox[]>(url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.err.handleError)
    );
  }

}
