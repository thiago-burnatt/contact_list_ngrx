import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: ContactDisplayComponent},
  {path: 'edit/:id', component: ContactDetailsComponent },
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
