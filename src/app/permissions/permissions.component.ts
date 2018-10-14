import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MicrosoftService } from '../services/microsoft.service';

@Component({
    selector: 'app-permissions',
    templateUrl: './permissions.component.html',
    styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent {
    constructor(
        private router: Router,
        private microsoftService: MicrosoftService
    ) {}

    proceed() {
        this.router.navigate(['']);
    }

    exit() {
        this.microsoftService.cancelAuthentication();
        this.router.navigate(['splash']);
    }
}
