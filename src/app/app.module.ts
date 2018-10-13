import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { QuickStartComponent } from './tabs/quick-start/quick-start.component';
import { MoreComponent } from './tabs/more/more.component';
import { ChatComponent } from './tabs/chat/chat.component';
import { HelpComponent } from './tabs/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    PermissionsComponent,
    QuickStartComponent,
    MoreComponent,
    ChatComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
