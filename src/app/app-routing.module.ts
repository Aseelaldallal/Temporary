import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickStartComponent } from './main/quick-start/quick-start.component';
import { MoreComponent } from './main/more/more.component';
import { ChatComponent } from './main/chat/chat.component';
import { HelpComponent } from './main/help/help.component';
import { SplashComponent } from './splash/splash.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ErrorComponent } from './error/error.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        children: [
            { path: 'quickstart', component: QuickStartComponent },
            { path: 'more', component: MoreComponent },
            { path: 'chat', component: ChatComponent },
            { path: 'help', component: HelpComponent }
        ]
    },

    { path: 'splash', component: SplashComponent },
    { path: 'permissions', component: PermissionsComponent },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
