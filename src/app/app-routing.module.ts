import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './modules/bitcoin-news/news/news.component';

const routes: Routes = [
  {
    path: '',
    title: 'BTC News',
    component: NewsComponent,
  },
  {
    path: 'bitcoin',
    loadChildren: () =>
      import('./modules/bitcoin-news/bitcoin-news.module').then(
        (m) => m.BitcoinNewsModule
      ),
  },
  {
    path: 'tech',
    loadChildren: () =>
      import('./modules/tech-news/tech-news.module').then(
        (m) => m.TechNewsModule
      ),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./modules/business-news/business-news.module').then(
        (m) => m.BusinessNewsModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
