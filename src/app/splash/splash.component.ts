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
    authInProgress: Subscription;
    authResult: Subscription;
    authenticating = false;

    constructor(
        private microsoftService: MicrosoftService,
        private router: Router
    ) {}

    ngOnInit() {
        this.authInProgress = this.microsoftService.authenticating.subscribe(
            (isAuthenticating: boolean) => {
                this.authenticating = isAuthenticating;
            }
        );
        this.authResult = this.microsoftService.authenticationResult.subscribe(
            (authFailed: string) => {
                if (!authFailed) {
                    this.router.navigate(['permissions']);
                } else {
                    this.router.navigate(['Error']);
                }
            }
        );
    }

    async onLogin() {
        await this.microsoftService.authenticate();
    }

    ngOnDestroy() {
        this.authInProgress.unsubscribe();
    }
}
