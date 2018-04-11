import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Actor} from '../../shared/actor.model';
import {ActorListService} from '../actor-list.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.html',
  styleUrls: ['./actor-edit.css']
})
export class ActorEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') acForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Actor;

  constructor(private acService: ActorListService) { }

  ngOnInit() {
    this.subscription = this.acService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.acService.getActor(index);
          this.acForm.setValue({
            name: this.editedItem.name,
            description: this.editedItem.description
          })
        }
      );
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newActor = new Actor(value.name, value.age);
    if (this.editMode ){
      this.acService.updateActor(this.editedItemIndex, newActor);
    } else {
      this.acService.addActor(newActor);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.acForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.acService.deleteActor(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
