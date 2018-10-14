import { Component, OnInit, OnDestroy } from '@angular/core';
import { MicrosoftService } from '../services/microsoft.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    authenticating = false;

    constructor(
        private microsoftService: MicrosoftService,
        private router: Router
    ) {}

    ngOnInit() {
        this.subscription = this.microsoftService.authenticating.subscribe(
            (isAuthenticating: boolean) => {
                this.authenticating = isAuthenticating;
                if (!this.authenticating) {
                    this.router.navigate(['permissions']);
                }
            }
        );
    }

    async onLogin() {
        await this.microsoftService.authenticate();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
