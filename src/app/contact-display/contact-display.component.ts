import { IContact } from './../store/app.state';
import { map } from 'rxjs';
import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent {
  contactList: IContact[] = [];

  constructor(
    private dataService: DataService,
    private store: Store<{ app: IAppState}>,
    ) { }

  contacList$ = this.store.select('app')
    .pipe(map(app => app.contacts));


  ngOnInit() {
    this.contactList = this.dataService.contactList;

  }

  onDelete(i: number) {
    if (confirm('Tem certeza?') === true) {
      this.dataService.deleteFromArray(i);
    }
  }

}
