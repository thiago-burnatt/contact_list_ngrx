import { createAction, props } from "@ngrx/store";
import { IContact, IContactIndex } from "./app.reducers";

export const loadAllContactsAction = createAction('[App] Load All contacts action ')
export const setContacts = createAction('[App] Set all contacts', props<{ payload: IContact[] }>());
export const loadContactsSuccess = createAction('[App] Load all contacts success');

export const updateContactAction = createAction('[App] Update contact action');
export const updateContact = createAction('[App] Update contact', props<{ payload: IContactIndex }>());
export const updateContactSuccess = createAction('[App] Update contact success');

export const createNew = createAction('[App] Create new contact', props<{ payload: IContact }>());
export const createNewSuccess = createAction('[App] Create contact success');

export const deleteContact = createAction('[App] Delete contact', props<{ index: number}>());
