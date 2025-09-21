import { Routes } from '@angular/router';
import { Home } from './angular-routing/basic-routing/home/home';
import { Login } from './angular-routing/basic-routing/login/login';
import { About } from './angular-routing/basic-routing/about/about';
import { Contact } from './angular-routing/basic-routing/contact/contact';
import { PageNotFound } from './angular-routing/basic-routing/page-not-found/page-not-found';
import { Users } from './angular-routing/users/users';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'user/:id/:name', component: Users},
    {path: '**', component: PageNotFound}
];
