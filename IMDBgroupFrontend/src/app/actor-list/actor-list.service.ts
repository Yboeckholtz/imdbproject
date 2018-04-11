import {Actor} from '../shared/actor.model';
import {Subject} from 'rxjs/Subject';

export class ActorListService {
  actorsChanged = new Subject<Actor[]>();
  startedEditing = new Subject<number>();
  private actors: Actor[] = [
    new Actor('Taxi Driver', 'a drama movie with action'),
  ];

  getActors() {
    return this.actors.slice();
  }
  getActor(index: number) {
    return this.actors[index];
  }
  addActor(actor: Actor) {
    this.actors.push(actor);
    this.actorsChanged.next(this.actors.slice());
  }
  addActors(actors: Actor[]) {
    // for (let actor of actors) {
    //   this.addActor(actor);
    // }
    this.actors.push(...actors);
    this.actorsChanged.next(this.actors.slice());
  }
  updateActor(index: number, newActor: Actor) {
    this.actors[index] = newActor;
    this.actorsChanged.next(this.actors.slice());
  }
  deleteActor(index: number) {
    this.actors.splice(index, 1);
    this.actorsChanged.next(this.actors.slice());
  }
}
