import { Component } from '@angular/core';
import {Router} from '@angular/router'; // Need to add router for the favourites page
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/angular/standalone';
import { TmdbService } from '../services/tmdb.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // makes component self contained so can work witot being declared
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail],
})
export class HomePage {
  movies: any[] = []; //this array list holds movies

  constructor(private router: Router, private tmdb: TmdbService) {} // Constructor for navigating pages, runs when HomePage is created
  async ngOnInit(){
    this.movies = await this.tmdb.getTrendingMovies(); // to load the trending movies on the home page when the page runs
  }

  goToFavourites() {
    this.router.navigate(['favourites']); // function to navigte to Favourites page
  }

 goToDetails(movie: any) {
  this.router.navigate(['/movie-details', movie.id]); // navigate to movie details page when built
 }
 getImage(path: string) {
  return this.tmdb.getImageUrl(path); // get movie poster URL
 }
}
