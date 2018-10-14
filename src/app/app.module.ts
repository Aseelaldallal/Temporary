import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { QuickStartComponent } from './main/quick-start/quick-start.component';
import { MoreComponent } from './main/more/more.component';
import { ChatComponent } from './main/chat/chat.component';
import { HelpComponent } from './main/help/help.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        SplashComponent,
        PermissionsComponent,
        QuickStartComponent,
        MoreComponent,
        ChatComponent,
        HelpComponent,
        ErrorComponent,
        MainComponent
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
