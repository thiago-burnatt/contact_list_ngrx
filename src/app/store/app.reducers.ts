import { createReducer, on } from "@ngrx/store";
import { setContacts, createNew, updateContact, deleteContact } from "./app.actions";

export interface IContact {
  name: string;
  lastname: string;
  adress: string;
  phone: string;
  createdAt: string;
}

export interface IContactIndex {
  contact: IContact;
  index: number;
}

export interface IAppState {
  contacts: IContact[];
}

export const appInitialState: IAppState = {
  contacts: []
}

export const  appReducer = createReducer(
  appInitialState,
  on(setContacts, (state, { payload } ) => {
    return state = {
      ...state,
      contacts: payload
    }
  }),
  on(createNew, (state, payload) => {
    return state = {
      ...state,
      contacts: [...state.contacts, payload.payload]
    }
  }),
  on(updateContact, (state, { payload }) => {
    const contacts = [...state.contacts];
    contacts[payload.index] = payload.contact;

    return state = {
      ...state,
      contacts: contacts
    }
  }),
  on(deleteContact, (state, payload) => {
    const contacts = [...state.contacts];
    contacts.splice(payload.index, 1);
    return state = {
      ...state,
      contacts: contacts
    }
  })
)
