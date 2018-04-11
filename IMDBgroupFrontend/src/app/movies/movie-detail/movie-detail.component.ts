import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie.model';
import {MovieService} from '../movie.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
 movie: Movie;
 id: number;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.movie = this.movieService.getMovie(this.id);
        }
      );
  }
  onAddToActorList() {
    this.movieService.addActorsToActorList(this.movie.actors);
  }
  onEditMovie() {
    this.router.navigate(['edit'], { relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); zo kan het ook, maar is complexer
  }
  onDeleteMovie() {
    this.movieService.deleteMovie(this.id);
    this.router.navigate(['/movies']); //na het deleten weer terug navigeren naar /movies
  }
  // onAddToFavoriteList() {
  //   this.movieService.addMovieToFavoriteList(this.movie.name);
  // }
}
