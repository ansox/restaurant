import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'item-detail/:id', component: ItemDetailComponent}
]

