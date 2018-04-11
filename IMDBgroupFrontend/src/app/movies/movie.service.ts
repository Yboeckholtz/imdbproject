import { Injectable} from '@angular/core';

import {Movie} from './movie.model';
import {Actor} from '../shared/actor.model';
import {ActorListService} from '../actor-list/actor-list.service';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';

@Injectable()
export class MovieService {
  moviesChanged = new Subject<Movie[]>();

  private movies: Movie[] = [
    new Movie(
      'Taxi Driver',
      ' A drama movie with action ',
      'http://www.filmsite.org/posters/taxidriver.jpg',
      [
        new Actor('Robert de Niro',  "")
      ]),
  ];
  constructor(private acService: ActorListService) {}

 getMovies() {
   return this.movies.slice();
 }

 getMovie(index: number) {
   return this.movies[index];
 }
  addActorsToActorList(actors: Actor[]) {
    this.acService.addActors(actors);
  }
  addMovie(movie: Movie) {
    this.movies.push(movie);
    this.moviesChanged.next(this.movies.slice());
  }
  updateMovie(index: number, newMovie: Movie) {
    this.movies[index] = newMovie;
    this.moviesChanged.next(this.movies.slice());
  }
  deleteMovie( index: number) {
    this.movies.splice(index, 1);
    this.moviesChanged.next(this.movies.slice());
  }
}

// constructor(private http: Http) { }
//
// // Retrieve all threads from the server.
// public getThreads(): Promise<Movie[]> {
//   console.log('items ophalen van server');
// return this.http.get(this.serverUrl, { headers: this.headers })
//   .toPromise()
//   .then(response => {
//     console.dir(response.json());
//     this.movies = response.json() as Movie[];
//     return this.movies;
//   })
//   .catch(error => {
//     return this.handleError(error);
//   });
// console.log(this.movies);
// }
