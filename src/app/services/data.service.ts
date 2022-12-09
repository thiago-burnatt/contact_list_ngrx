import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { createNew, deleteContact, updateContactAction, updateContact } from "../store/app.actions";
import { IContact, IAppState, IContactIndex } from "../store/app.reducers";

@Injectable()
export class DataService {

  constructor(private store: Store<{app: IAppState}>) {}

  createNew(contact: IContact) {
    this.store.dispatch(createNew({ payload: contact }));
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
