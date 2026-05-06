import { Component } from '@angular/core';
import {Router} from '@angular/core'; // Need to add router for the favourites page
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons],
})
export class HomePage {
  constructor(private router: Router) {} // Constructor for navigating pages, runs when HomePage is created

  goToFavourites() {
    this.router.navigate(['favourites']); // function to navigte to Favourites page
  }
}
