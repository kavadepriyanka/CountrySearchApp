import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SearchComponent },
  { path: 'detail/:name', component: CountryDetailComponent },
  { path: 'countries', component: SearchComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'register', component: RegisterUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {  }

