import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Analysis } from '../state/models/analysis';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AnalysisService {

  private analysesUrl = 'api/analyses';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET analyses from the server */
  getAnalyses (): Observable<Analysis[]> {
    return this.http.get<Analysis[]>(this.analysesUrl)
      .pipe(
        tap(analyses => this.log('fetched analyses')),
        catchError(this.handleError('getAnalysises', []))
      );
  }

  /** GET analysis by id. Return `undefined` when id not found */
  getAnalysisNo404<Data>(id: number): Observable<Analysis> {
    const url = `${this.analysesUrl}/?id=${id}`;
    return this.http.get<Analysis[]>(url)
      .pipe(
        map(analyses => analyses[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} analysis id=${id}`);
        }),
        catchError(this.handleError<Analysis>(`getAnalysis id=${id}`))
      );
  }

  /** GET analysis by id. Will 404 if id not found */
  getAnalysis(id: number): Observable<Analysis> {
    const url = `${this.analysesUrl}/${id}`;
    return this.http.get<Analysis>(url).pipe(
      tap(_ => this.log(`fetched analysis id=${id}`)),
      catchError(this.handleError<Analysis>(`getAnalysis id=${id}`))
    );
  }

  /* GET analyses whose name contains search term */
  searchAnalyses(term: string): Observable<Analysis[]> {
    if (!term.trim()) {
      // if not search term, return empty analysis array.
      return of([]);
    }
    return this.http.get<Analysis[]>(`${this.analysesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found analyses matching "${term}"`)),
      catchError(this.handleError<Analysis[]>('searchAnalysises', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new analysis to the server */
  addAnalysis (analysis: Analysis): Observable<Analysis> {
    return this.http.post<Analysis>(this.analysesUrl, analysis, httpOptions).pipe(
      tap((a: Analysis) => this.log(`added analysis w/ id=${a.id}`)),
      catchError(this.handleError<Analysis>('addAnalysis'))
    );
  }

  /** DELETE: delete the analysis from the server */
  deleteAnalysis (analysis: Analysis | number): Observable<Analysis> {
    const id = typeof analysis === 'number' ? analysis : analysis.id;
    const url = `${this.analysesUrl}/${id}`;

    return this.http.delete<Analysis>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted analysis id=${id}`)),
      catchError(this.handleError<Analysis>('deleteAnalysis'))
    );
  }

  /** PUT: update the analysis on the server */
  updateAnalysis (analysis: Analysis): Observable<any> {
    return this.http.put(this.analysesUrl, analysis, httpOptions).pipe(
      tap(_ => this.log(`updated analysis id=${analysis.id}`)),
      catchError(this.handleError<any>('updateAnalysis'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AnalysisService message with the MessageService */
  private log(message: string) {
    console.log(`AnalysisService: ${message}`);
  }
}
