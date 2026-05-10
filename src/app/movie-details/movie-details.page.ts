import { Component, OnInit } from '@angular/core'; // creates page and runs when page loads
import { CommonModule } from '@angular/common'; // needed for angular features *ngFor
import { FormsModule } from '@angular/forms';
import { TmdbService } from '../services/tmdb.service';
import { ActivatedRoute } from '@angular/router'; // needed to get movieId from url
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton,]
})
export class MovieDetailsPage implements OnInit {

  movieId: number = 0; // variable which stores  movie id
  movie: any; // stroes move details
  cast: any[] = []; //stores array list of cast members
  crew: any[] = []; //stores array list of crew members 

  constructor(private route: ActivatedRoute, private tmdb: TmdbService) { } // runs when page is created, Injected Activated route so can access parameters

  async ngOnInit() {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));

    console.log(this.movieId);// print movie ID to browser

    this.movie = await this.tmdb.getMovieDetails(this.movieId);// Get the movie ID from the URL

    const credits = await this.tmdb.getMovieCredits(this.movieId); // get cast and crew info for movies

    this.cast = credits.cast; // store cast array

    this.crew = credits.crew; // store crew array

    
  }

}
