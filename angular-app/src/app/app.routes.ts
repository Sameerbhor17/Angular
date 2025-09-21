import { Routes } from '@angular/router';
import { Home } from './angular-routing/home/home';
import { Login } from './angular-routing/login/login';
import { About } from './angular-routing/about/about';
import { Contact } from './angular-routing/contact/contact';
import { PageNotFound } from './angular-routing/page-not-found/page-not-found';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: '**', component: PageNotFound}
];
