import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ShoppingComponent } from './shopping/shopping.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path:'list', component:ListComponent},
    {path:'shopping', component:ShoppingComponent}
];
