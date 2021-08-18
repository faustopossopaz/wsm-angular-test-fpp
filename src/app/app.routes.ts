import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

const APP_ROUTES: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '**',pathMatch:'full', redirectTo: 'welcome'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);





