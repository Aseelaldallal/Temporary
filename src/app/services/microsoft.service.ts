import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MicrosoftService {
    private token = false;
    authenticating = new Subject<boolean>();

    constructor() {}

    authenticate(): void {
        this.authenticating.next(true);
        setTimeout(() => {
            this.token = true;
            this.authenticating.next(false);
        }, 4000);
    }

    isAuthenticated(): boolean {
        return this.token;
    }
}
