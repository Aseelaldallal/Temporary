import { Component, OnInit } from '@angular/core';
import { MicrosoftService } from '../services/microsoft.service';

@Component({
    selector: 'app-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
    constructor(private microsoftService: MicrosoftService) {}

    ngOnInit() {}

    onLogin() {
        this.microsoftService.authenticate();
    }
}
