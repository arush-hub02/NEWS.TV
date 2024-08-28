import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NewstvService } from './service/newstv.service';
import { NewsComponent } from './modules/bitcoin-news/news/news.component';
import { TechNewsComponent } from './modules/tech-news/tech-news/tech-news.component';
import { BusinessNewsComponent } from './modules/business-news/business-news/business-news.component';
import { ContactComponent } from './modules/contact-us/contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    NavbarComponent,
    NewsComponent,
    TechNewsComponent,
    BusinessNewsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration(), NewstvService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
