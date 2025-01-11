import { Routes } from '@angular/router';
import {BlogHomeComponent}  from "./components/blog-home/blog-home.component";
import {BlogItemDetailsComponent} from './components/blog-item-details/blog-item-details.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogHomeComponent,
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailsComponent
  }
];

