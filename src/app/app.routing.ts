import {Routes, RouterModule} from "@angular/router";
import { ListingComponent } from './listing-component/listing-component.component';
import { MainComponent } from './main-component.component';
import {AgentsComponent} from "./agents-component.component";
import {ContactComponent} from "./contact.component";

const APP_ROUTES: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'agents', component: AgentsComponent},
  {path: 'listing', component:ListingComponent},
  {path: 'home', component:MainComponent},
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: '**',redirectTo: 'home', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
