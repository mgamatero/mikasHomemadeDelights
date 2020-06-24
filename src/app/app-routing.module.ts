import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ PageLandingComponent} from '../app/components/page-landing/page-landing.component';
import{ PagePricelistComponent} from '../app/components/page-pricelist/page-pricelist.component';
import{ PageContactComponent} from '../app/components/page-contact/page-contact.component';
import{ PageNotfoundComponent} from '../app/components/page-notfound/page-notfound.component';



const routes: Routes = [
  { path: "", component: PageLandingComponent },
  { path: "price-list", component: PagePricelistComponent },
  { path: "contact", component: PageContactComponent },
  { path: "**", component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],  //top of page for each route,
  exports: [RouterModule]
})
export class AppRoutingModule { }
