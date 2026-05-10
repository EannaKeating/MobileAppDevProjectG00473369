import { Component, OnInit } from '@angular/core'; // creates page and runs when page loads
import { CommonModule } from '@angular/common'; // needed for angular features *ngFor
import { FormsModule } from '@angular/forms';
import { TmdbService } from '../services/tmdb.service';//Api service for tmdb 
import { Router, ActivatedRoute } from '@angular/router'; // needed to get movieId from url
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonItem, IonLabel]
})
export class MovieDetailsPage implements OnInit {

  movieId: number = 0; // variable which stores  movie id
  movie: any; // stroes move details
  cast: any[] = []; //stores array list of cast members
  crew: any[] = []; //stores array list of crew members 

  isFavourite: boolean = false; // boolean to check if add to favs

  constructor(private route: ActivatedRoute, private tmdb: TmdbService, private router: Router) { } // runs when page is created, Injected Activated route so can access parameters

  async ngOnInit() {
    //get movie ID from route
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));

    console.log(this.movieId);// print movie ID to browser

    this.movie = await this.tmdb.getMovieDetails(this.movieId);// Get the movie ID from the URL

    const credits = await this.tmdb.getMovieCredits(this.movieId); // get cast and crew info for movies

    this.cast = credits.cast; // store cast array

    this.crew = credits.crew; // store crew array

    let favs = JSON.parse(localStorage.getItem('favourites')  || '[]');// load favs from array
  }
  //add/removes movie from favourites list
  toggleFavourite() {

    let favs = JSON.parse(localStorage.getItem('favourites') || '[]');

    const exists = favs.findIndex((m: any) => m.id === this.movie.id);

    if (exists > -1) {
      // remove movie
      favs.splice(exists, 1); // remove movie
      this.isFavourite = false;
    } else {
      // add movie
      favs.push(this.movie); // add movie
      this.isFavourite = true;
    }

    // save to localStorage
    localStorage.setItem('favourites', JSON.stringify(favs));
  }
    //goes to details page
  goToPerson(id: number) {
    this.router.navigate(['/details', id]);
  }
}

