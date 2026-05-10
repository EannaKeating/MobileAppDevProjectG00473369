import {Injectable} from '@angular/core'; //allows class to be usable through the app
import axios from 'axios'; //used to call TMDB API to get movie data

const API_KEY = '7309bad0a92d21fbb45442aa76a681c6';// my personal API key
const BASE_URL = 'https://api.themoviedb.org/3'; //URL for TMDBs API

@Injectable({
    providedIn: 'root'
})
export class TmdbService {
    constructor() {} 

    // gets trending movies of the day
    async getTrendingMovies() {
       const res = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`); //returns results from TMBD
       return res.data.results;//returns movie list
    }
    // gets movie details for movie
    async getMovieDetails(movieId: number) {
        const res = await axios.get(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
        );
        return res.data; //returns movie details
    }

    // Cast & Crew info
    async getMovieCredits(movieId: number) {
        const res = await axios.get(
            `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}` //cals tmdb api using movie id to get credit da6a
        );
        return res.data // returns cast/ cre credits
    }
    // builds image URL FROM TMDB DATA
    getImageUrl(path: string, size: string = 'w500') {
        return path ? `https://image.tmdb.org/t/p/${size}${path}` : null;
        
    }
    // searches movies by keyword
    async searchMovies(query: string) {

        const res = await axios.get(
            `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
        );
        return res.data.results; //returns search results
    }
    // gets actor/ crew details
    async getPersonDetails(id: number) {
        const res = await axios.get(
            `${BASE_URL}/person/${id}?api_key=${API_KEY}`
        );
        return res.data;// returns actor crew details
    }
    // shows movies which person has worked on
    async getPersonMovieCredits(id: number) {
        const res = await axios.get (
            `${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}`
        );
        return res.data.cast; // shows credits
    }
}