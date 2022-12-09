import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { FormComponent } from './form/form.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { DataService } from './services/data.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AppRoutingModule } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotificationService } from './services/notification.service';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ContactListEffectService } from './store/contactList.effects.service';
import { appReducer } from './store/app.reducers';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactDisplayComponent,
    ContactDetailsComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({app: appReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ContactListEffectService]),

  ],
  providers: [DataService, NotificationService, ContactListEffectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
