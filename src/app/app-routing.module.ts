import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickStartComponent } from './tabs/quick-start/quick-start.component';
import { MoreComponent } from './tabs/more/more.component';
import { ChatComponent } from './tabs/chat/chat.component';
import { HelpComponent } from './tabs/help/help.component';
import { SplashComponent } from './splash/splash.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  { path: '', component: QuickStartComponent },
  { path: 'more', component: MoreComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'help', component: HelpComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
