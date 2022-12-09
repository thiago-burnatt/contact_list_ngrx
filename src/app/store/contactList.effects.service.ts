import { map } from 'rxjs';
import {
  IAppState,
  setContacts,
  IContact,
  loadContactsSuccess,
  loadAllContactsAction,
  updateContactSuccess,
  updateContactAction,
  createNew,
  createNewSuccess } from './app.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import {
  Actions,
  createEffect,
  ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { switchMap, tap } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ContactListEffectService {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private notificationService: NotificationService,
    private store: Store<{ app: IAppState }>
  ) {}

  loadAll = createEffect(
    () => this.actions$.pipe(
      ofType(loadAllContactsAction),
      switchMap(() =>
        this.http.get<IContact[]>('https://contact-list-e2e9a-default-rtdb.firebaseio.com/contacts.json')
      ),
      tap(contacts =>
        {
          const contactList = [];
          for (let contact in contacts) {
           contactList.push(contacts[contact])
          }
          this.store.dispatch(setContacts({ payload: contactList }));
            }),
      map(() => loadContactsSuccess()),
    )
  )

  updateContact = createEffect(
    () => this.actions$.pipe(
      ofType(updateContactAction),
      map(() => {
        let contactList = [];
        this.store.select('app')
        .subscribe((data) => contactList = data.contacts);
        return contactList;
      }),
      tap((contactList) => {
        this.http.put<IContact[]>('https://contact-list-e2e9a-default-rtdb.firebaseio.com/contacts.json'
        , contactList).subscribe(() => {});
      }),
      map(() => updateContactSuccess()),
      tap(() => this.notificationService.showSuccess('Sucesso', 'Lista de contatos atualizada!')
      )
  ),
  )

  creatContact = createEffect(
    () => this.actions$.pipe(
      ofType(createNew),
      map((contact) => {
        this.http.post<IContact>('https://contact-list-e2e9a-default-rtdb.firebaseio.com/contacts.json'
        , contact.payload).subscribe(() => {
        })
      }),
      map(() => createNewSuccess()),
      tap(() => this.notificationService.showSuccess('Sucesso', 'Contato criado!')
      )
    )
  )
}
