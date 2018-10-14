import { Injectable } from '@angular/core';
import { Subject, generate } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MicrosoftService {
    private token = false;
    public authenticationResult = new Subject<string>();
    public authenticating = new Subject<boolean>();

    constructor() {}

    authenticate(): void {
        this.authenticating.next(true);
        setTimeout(() => {
            this.authenticating.next(false);
            const authResult = this.generateRandomError();
            if (authResult === '') {
                this.token = true;
            }
            this.authenticationResult.next(authResult);
        }, 3000);
    }

    isAuthenticated(): boolean {
        return this.token;
    }

    cancelAuthentication() {
        this.token = false;
    }

    generateRandomError(): string {
        const x = Math.random() * 10;
        if (x > 9) {
            return 'Authentication Error';
        } else {
            return '';
        }
    }
}
