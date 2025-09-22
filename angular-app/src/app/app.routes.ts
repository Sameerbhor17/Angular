import { Routes } from '@angular/router';
import { Home } from './angular-routing/basic-routing/home/home';
import { Login } from './angular-routing/basic-routing/login/login';
import { About } from './angular-routing/basic-routing/about/about';
import { Contact } from './angular-routing/basic-routing/contact/contact';
import { PageNotFound } from './angular-routing/basic-routing/page-not-found/page-not-found';
import { Users } from './angular-routing/dynamic-routing/users/users';
import { PassDataBetweenPages } from './angular-routing/pass-data-between-pages/pass-data-between-pages';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'user/:id/:name', component: Users},
    {path: 'profile', component: PassDataBetweenPages, data:{name: 'Sameer Bhor', age: 23}},
    {path: '**', component: PageNotFound}
];
