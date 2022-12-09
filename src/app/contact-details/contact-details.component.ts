import { IContact } from './../store/app.state';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: IContact;
  enableInput: boolean = false;
  id: number;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<{app: IAppState}>,
              ) { }

  contactList$ = this.store.select('app')
    .pipe(map(app => app.contacts));

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.contactList$.subscribe((data) => this.contact = data[this.id])
    })
  }

  onUpdate(form: NgForm) {
    const contactIndex = {
      contact: {
        name: form.value.name,
        lastname: form.value.lastname,
        adress: form.value.adress,
        phone: form.value.phone,
        createdAt: new Date().toLocaleString()
      },
      index: this.id

    }
    this.dataService.updateFromArray(contactIndex);
    this.enableInput = !this.enableInput;
  }

  onDelete() {
    if (confirm('Tem certeza?') === true) {
      this.dataService.deleteFromArray(this.id);
      this.router.navigate(['']);
    }
  }

  onGoBack() {
    this.router.navigate(['']);
  }

  onEnableInput() {
    this.enableInput = !this.enableInput;
  }

}
