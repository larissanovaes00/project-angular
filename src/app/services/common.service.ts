import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../product';

@Injectable({
    providedIn: 'root'
})

export class CommonService {

    constructor(private httpClient: HttpClient) { }

    private apiServer = "http://localhost:3000";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    
    create(product): Observable<Product> {
        return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
        .pipe(
            catchError(this.errorHandler)
        )
    }

    getById(id): Observable<Product> {
        return this.httpClient.get<Product>(this.apiServer + '/products/' + id)
        .pipe(
            catchError(this.errorHandler)
        )
    }

    getAll(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.apiServer + '/products/')
        .pipe(
            catchError(this.errorHandler)
        )
    }

    update(id, product): Observable<Product> {
        return this.httpClient.put<Product>(this.apiServer + '/products/' + id, product, this.httpOptions)
        .pipe(
            catchError(this.errorHandler)
        )
    }

    delete(id): Observable<any> {
        return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
        .pipe(
            catchError(this.errorHandler)
        )
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}





