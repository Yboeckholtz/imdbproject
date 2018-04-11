import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorEditComponent } from './actor-list/actor-edit/actor-edit';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ActorListService} from './actor-list/actor-list.service';
import {AppRoutingModule} from './app-routing.module';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import {MovieService} from './movies/movie.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    ActorListComponent,
    ActorEditComponent,
    MovieDetailComponent,
    DropdownDirective,
    MovieStartComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ActorListService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
