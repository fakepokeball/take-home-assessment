import { Routes } from '@angular/router';
import { PageOneComponent } from './layout/page-one/page-one.component';
import { PageTwoComponent } from './layout/page-two/page-two.component';

export const routes: Routes = [
  { path: 'one', component: PageOneComponent },
  { path: 'two', component: PageTwoComponent },
  { path: '', redirectTo: 'one', pathMatch: 'full' }, // Redirect to 'one' by default
  { path: '**', redirectTo: 'one' } // Wildcard route redirects to 'one'
];