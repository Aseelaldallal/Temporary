import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickStartComponent } from './tabs/quick-start/quick-start.component';
import { MoreComponent } from './tabs/more/more.component';
import { ChatComponent } from './tabs/chat/chat.component';
import { HelpComponent } from './tabs/help/help.component';
import { SplashComponent } from './splash/splash.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ErrorComponent } from './error/error.component';
import { AuthGaurd } from './services/auth-gaurd.service';

const appRoutes: Routes = [
  { path: '', component: QuickStartComponent, canActivate: [AuthGaurd] },
  { path: 'more', component: MoreComponent, canActivate: [AuthGaurd] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGaurd] },
  { path: 'help', component: HelpComponent, canActivate: [AuthGaurd] },
  { path: 'splash', component: SplashComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
