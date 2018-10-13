import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicrosoftService {
  private token = false;

  constructor() {}

  authenticate(): void {
    setTimeout(() => {
      this.token = true;
    }, 4000);
    this.token = true;
  }

  isAuthenticated(): boolean {
    return this.token;
  }
}
