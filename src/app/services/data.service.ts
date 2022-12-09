import { IAppState, IContact, createNew, updateContact, IContactIndex, deleteContact, updateContactAction } from './../store/app.state';
import { map } from "rxjs";

import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { NotificationService } from './notification.service';

@Injectable()
export class DataService {
  contactList: IContact[] = [];

  constructor(
    private store: Store<{app: IAppState}>,
    ) {}

  contactList$ = this.store.select('app')
    .pipe(map(app => app.contacts));


  createNew(contact: IContact) {
    this.store.dispatch(createNew({ payload: contact }));
   }

  findOne(id: number): IContact {
    return this.contactList[id];
  }

  deleteFromArray(index: number) {
    this.store.dispatch(deleteContact({ index }));
    this.store.dispatch(updateContactAction());
  }

  updateFromArray(data: IContactIndex) {
    this.store.dispatch(updateContact({ payload: data }));
    this.store.dispatch(updateContactAction());
  }

}
