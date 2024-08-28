import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsModule } from './contact-us.module';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'news.tv',
    title: 'Contact Us',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsRoutingModule {}
