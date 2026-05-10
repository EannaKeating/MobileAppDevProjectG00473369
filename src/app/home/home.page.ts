import { Component } from '@angular/core';
import {Router} from '@angular/router'; // Need to add router for the favourites page
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail, IonInput } from '@ionic/angular/standalone';
import { TmdbService } from '../services/tmdb.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // makes component self contained so can work witot being declared
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail, IonInput],
})
export class HomePage {
  movies: any[] = []; //this array list holds movies

  constructor(private router: Router, private tmdb: TmdbService) {} // Constructor for navigating pages, runs when HomePage is created
  async ngOnInit(){
    this.movies = await this.tmdb.getTrendingMovies(); // to load the trending movies on the home page when the page runs
    console.log(this.movies);
  }

  async onSearch(event:any) {

    const query = event.target.value;

    if (!query || query.trim() == '') { // search bar if empty will show trending movies
      this.movies = await this.tmdb.getTrendingMovies();
      return;
    }
    this.movies = await this.tmdb.searchMovies(query);
  }

  goToFavourites() {
    this.router.navigate(['favourites']); // function to navigte to Favourites page
  }

 goToDetails(movie: any) {
  console.log(movie.id);
  this.router.navigate(['/movie-details', movie.id]); // navigate to movie details page when built
 }
 getImage(path: string) {
  return this.tmdb.getImageUrl(path); // get movie poster URL
 }
 addToFavourites(movie: any) {

  let favs = JSON.parse(localStorage.getItem('favourites') || '[]');

  const exists = favs.find((m: any) => m.id === movie.id);

  if (!exists) {
  favs.push(movie);

  localStorage.setItem('favourites', JSON.stringify(favs));
 }
}
}
