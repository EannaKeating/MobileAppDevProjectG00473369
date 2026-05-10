import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home', // Home page route 
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '', // redirects empty Url to home page
    redirectTo: 'home',
    pathMatch: 'full',
  },

  //Movie Details page route
  // Importan
  {
    path: 'movie-details/:id',
    
    loadComponent: () => import('./movie-details/movie-details.page').then(
       (m) => m.MovieDetailsPage)
  },
  {
    path: 'favourites',
    loadComponent: () => import('./favourites/favourites.page').then( m => m.FavouritesPage)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },


];
