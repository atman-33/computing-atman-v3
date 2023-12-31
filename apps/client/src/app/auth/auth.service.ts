import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, catchError, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'  // can inject anywahere
})
export class AuthService {
    private readonly authenticated = new Subject<boolean>();
    authenticated$ = this.authenticated.asObservable();

    constructor(
        private readonly httpClient: HttpClient,
        private readonly router: Router) { }

    isAuthenticated(): Observable<boolean> {
        return this.httpClient.get<boolean>('api/auth').pipe(
            tap(() => {
                this.authenticated.next(true);
            }),
            catchError(() => of(false)));
    }

    logout(): void {
        this.httpClient.post('api/auth/logout', {}).subscribe(() => {
            this.authenticated.next(false);
            this.router.navigate(['/login']);
        });
    }
}