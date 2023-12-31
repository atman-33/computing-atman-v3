import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(
        private readonly authService: AuthService,
        private readonly router: Router) { }

    canActivate() {
        console.log('auth.guard.ts => canActivate()');
        return this.authService.isAuthenticated().pipe(
            tap((authenticated) => {
                if (!authenticated) {
                    this.router.navigate(['/login']);
                }
            })
        );
    }
}