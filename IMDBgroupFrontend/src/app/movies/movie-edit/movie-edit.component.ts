import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
id: number;
editMode = false;
movieForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit() {
    // const newMovie = new Movie(        Niet meer nodig om het eerst te storen in een constant, is al een juiste format
    //   this.movieForm.value['name'],
    //   this.movieForm.value['description'],
    //   this.movieForm.value['imagePath'],
    //   this.movieForm.value['actors']);
    if (this.editMode) {
      this.movieService.updateMovie(this.id, this.movieForm.value);
    } else {
      this.movieService.addMovie(this.movieForm.value);
    }
    this.onCancel();
  }
  onAddActor() {
    (<FormArray>this.movieForm.get('actors')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'age': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteMovie(index: number) {
    (<FormArray>this.movieForm.get('movies')).removeAt(index);
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  private initForm() {
    let movieName = '';
    let movieImagePath = '';
    let movieDescription = '';
    let movieActors = new FormArray ([]);

    if (this.editMode) {
      const movie = this.movieService.getMovie(this.id);
      movieName = movie.name;
      movieImagePath = movie.imagePath;
      movieDescription = movie.description;
      if (movie['actors']) {
        for (let actor of movie.actors) {
          movieActors.push(
            new FormGroup({
              'name': new FormControl(actor.name, Validators.required),
              'age' : new FormControl(actor.description, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.movieForm = new FormGroup({
      'name' : new FormControl(movieName, Validators.required),
      'imagePath': new FormControl(movieImagePath, Validators.required),
      'description': new FormControl(movieDescription, Validators.required),
      'actors': movieActors
    });
  }

}
