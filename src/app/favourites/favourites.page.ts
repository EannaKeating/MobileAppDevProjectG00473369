import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail, IonInput]
})
export class FavouritesPage implements OnInit {

  favourites: any[] = [];

  constructor() { }

  ngOnInit() {
      this.favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  }

      removeFromFavourites(movie: any) {
      this.favourites = this.favourites.filter(m => m.id !== movie.id);
      localStorage.setItem('favourites', JSON.stringify(this.favourites));
    }
    
  }


