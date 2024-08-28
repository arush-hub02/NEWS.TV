import { Component } from '@angular/core';
import { NewstvService } from '../../../service/newstv.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrl: './tech-news.component.css',
})
export class TechNewsComponent {
  constructor(private api: NewstvService) {}

  toptechData: any = [];

  ngOnInit(): void {
    this.api.newstvtechservice().subscribe((result) => {
      console.log(result.articles);
      // this.topHeadlinesData = result.articles;
      this.toptechData = result.articles;
    });
  }
}
