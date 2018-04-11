import {NgModule} from '@angular/core';
import {MoviesComponent} from './movies/movies.component';
import {RouterModule, Routes} from '@angular/router';
import {ActorListComponent} from './actor-list/actor-list.component';
import {MovieStartComponent} from './movies/movie-start/movie-start.component';
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component';
import {MovieEditComponent} from './movies/movie-edit/movie-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movies', component: MoviesComponent , children: [
      { path: '', component: MovieStartComponent },
      { path: 'new', component: MovieEditComponent },
      { path: ':id', component: MovieDetailComponent },
      { path: ':id/edit', component: MovieEditComponent }
    ] },
  { path: 'actor-list', component: ActorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
