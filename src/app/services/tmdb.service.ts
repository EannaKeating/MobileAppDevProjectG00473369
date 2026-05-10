import {Injectable} from '@angular/core'; //allows class to be usable through the app
import axios from 'axios'; //used to call TMDB API to get movie data

const API_KEY = '7309bad0a92d21fbb45442aa76a681c6';// my personal API key
const BASE_URL = 'https://api.themoviedb.org/3'; //URL for TMDBs API

@Injectable({
    providedIn: 'root'
})
export class TmdbService {
    constructor() {} 

    async getTrendingMovies() {
       const res = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`); //returns results from TMBD
       return res.data.results;
    }

    async getMovieDetails(movieId: number) {
        const res = await axios.get(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
        );
        return res.data;
    }

    // Cast & Crew info
    async getMovieCredits(movieId: number) {
        const res = await axios.get(
            `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}` //cals tmdb api using movie id to get credit da6a
        );
        return res.data
    }
    getImageUrl(path: string, size: string = 'w500') {
        return path ? `https://image.tmdb.org/t/p/${size}${path}` : null;
        
    }

    async searchMovies(query: string) {

        const res = await axios.get(
            `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
        );
        return res.data.results;
    }
}