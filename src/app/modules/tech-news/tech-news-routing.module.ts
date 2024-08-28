import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
  {
    path: 'news',
    title: 'Tech News',
    component: TechNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechNewsRoutingModule {}
