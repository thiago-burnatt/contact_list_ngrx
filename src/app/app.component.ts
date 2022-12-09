import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { loadAllContactsAction } from './store/app.actions';
import { IAppState } from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private store: Store<{ app: IAppState }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadAllContactsAction());
  }
}
