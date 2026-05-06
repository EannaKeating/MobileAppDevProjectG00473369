import { Component } from '@angular/core';
import {Router} from '@angular/router'; // Need to add router for the favourites page
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // makes component self contained so can work witot being declared
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons],
})
export class HomePage {
  constructor(private router: Router) {} // Constructor for navigating pages, runs when HomePage is created

  goToFavourites() {
    this.router.navigate(['favourites']); // function to navigte to Favourites page
  }
}
