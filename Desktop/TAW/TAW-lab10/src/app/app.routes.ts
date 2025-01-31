import { Routes } from '@angular/router';
import { authGuard } from "./services/auth.guard"

export const routes: Routes = [
 {
   path: '',
   loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
 },
 {
   path: 'blog',
   loadComponent: () => import('./components/blog-home/blog-home.component').then(m => m.BlogHomeComponent),
   canActivate: [authGuard]
 },
 {
   path: 'blog/detail/:id',
   loadComponent: () => import('./components/blog-item-details/blog-item-details.component').then(m => m.BlogItemDetailsComponent)
 },
 {
   path: 'login',
   loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
 },
  {
    path: 'signup',
    loadComponent: () => import('./components/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'addpost',
    loadComponent: () => import('./components/add-post/add-post.component').then(m => m.AddPostComponent)
  }
];
