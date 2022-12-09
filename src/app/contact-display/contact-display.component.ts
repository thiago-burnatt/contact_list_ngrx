import { map } from 'rxjs';
import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IContact, IAppState } from '../store/app.reducers';

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent {

  constructor(
    private dataService: DataService,
    private store: Store<{ app: IAppState}>,
    ) { }

  contacList$ = this.store.select('app')
    .pipe(map(app => app.contacts));

  ngOnInit() {
  }

  onDelete(i: number) {
    if (confirm('Tem certeza?') === true) {
      this.dataService.deleteFromArray(i);
    }
  }

}
