import {injectable} from '@angular/core'; //allows class to be usable through the app
import axios from 'axios'; //used to call TMDB API to get movie data

const API_KEY = '7309bad0a92d21fbb45442aa76a681c6';// my personal API key
const BASE_URL = 'https://api.themovie.org/3'; //URL for TMDBs API

@Injectable({
    providedIn: 'root'
})
export class TmdbService {
    constructor() {} 

    async getTrendingMovies() {
        let res = axios.get(BASE_URL + '/trending/movie/day?api_key=' + API_KEY);
        return (await res).data.results; //returns results from TMBD
    }
}