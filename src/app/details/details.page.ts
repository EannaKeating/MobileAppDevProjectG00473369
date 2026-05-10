import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';//APi service
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail, IonInput]
})
export class DetailsPage implements OnInit {

  person: any; // sytores person details
  movies: any[] = []; //stores movies person has been in
  personId: number = 0;// navigation service

  constructor(
    private route: ActivatedRoute,// gets route parameters
    private tmdb: TmdbService,// API service
    private router: Router//navigation service
  ) { }
    //runs when page loads
  async ngOnInit() {
      // get person if from url
      this.personId = Number(
        this.route.snapshot.paramMap.get('id')
      );

      this.person = await this.tmdb.getPersonDetails(this.personId); // gets personal details from api

      this.movies = await this.tmdb.getPersonMovieCredits(this.personId); // gets movies credited for person
  }

  getImage(path: string) {// builds url image
    return this.tmdb.getImageUrl(path);
  }

  goToMovie(movie:any) { // naviagtes movies page
    this.router.navigate(['/movie-details', movie.id]);
  }

}
