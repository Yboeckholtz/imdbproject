import {Actor} from '../shared/actor.model';

export class Movie {
  public name: string;
  public description: string;
  public imagePath: string;
  public actors: Actor[];

  constructor(name: string, desc: string, imagePath: string, actors: Actor[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.actors = actors;
  }
}
