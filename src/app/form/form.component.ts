import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent {

  constructor(
    private dataservice: DataService) { }

  onSubmit(form: NgForm) {
    this.dataservice.createNew({
      name: form.value.name,
      lastname: form.value.lastname,
      adress: form.value.adress,
      phone: form.value.phone,
      createdAt: new Date().toLocaleString()
    }
     )
    if (form.valid) {
      form.reset();
    }
  }

  clearFieldsBtn(form: NgForm) {
    form.reset();
  }

}
