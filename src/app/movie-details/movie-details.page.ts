import { Component, OnInit } from '@angular/core'; // creates page and runs when page loads
import { CommonModule } from '@angular/common'; // needed for angular features *ngFor
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // needed to get movieId from url
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MovieDetailsPage implements OnInit {

  movieId: string | null = ''; // variable which stores 

  constructor(private route: ActivatedRoute) { } // runs when page is created, Injected Activated route so can access parameters

  ngOnInit() {

    this.movieId = this.route.snapshot.paramMap.get('id');// Get the movie ID from the URL

    console.log(this.movieId);// print movie ID to browser
  }

}
