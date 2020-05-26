import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLandingComponent } from './components/page-landing/page-landing.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/page-landing/header/header.component';
import { MiniGalleryComponent } from './components/page-landing/mini-gallery/mini-gallery.component';
import { SpecialtyComponent } from './components/page-landing/specialty/specialty.component';
import { LocationComponent } from './components/page-landing/location/location.component';
import { ContactComponent } from './components/page-landing/contact/contact.component';
import { WhoWeAreComponent } from './components/page-landing/who-we-are/who-we-are.component';
import { PagePricelistComponent } from './components/page-pricelist/page-pricelist.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/page-landing/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLandingComponent,
    PageNotfoundComponent,
    NavbarComponent,
    HeaderComponent,
    MiniGalleryComponent,
    SpecialtyComponent,
    LocationComponent,
    ContactComponent,
    WhoWeAreComponent,
    PagePricelistComponent,
    PageContactComponent,
    FooterComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
