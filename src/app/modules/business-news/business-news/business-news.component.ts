import { Component } from '@angular/core';
import { NewstvService } from '../../../service/newstv.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrl: './business-news.component.css',
})
export class BusinessNewsComponent {
  constructor(private api: NewstvService) {}

  topbusinessData: any = [];

  ngOnInit(): void {
    this.api.newstvbusinessservice().subscribe((result) => {
      console.log(result.articles);
      // this.topHeadlinesData = result.articles;
      this.topbusinessData = result.articles;
    });
  }
}
