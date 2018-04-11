import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Actor} from '../shared/actor.model';
import {ActorListService} from './actor-list.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit, OnDestroy {
actors: Actor[];
private subscription: Subscription;

  constructor(private acService: ActorListService) { }

  ngOnInit() {
    this.actors = this.acService.getActors();
    this.subscription = this.acService.actorsChanged
      .subscribe(
        (actors: Actor[]) => {
          this.actors = actors;
        }
      );
  }
  onEditActor(index: number) {
    this.acService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
