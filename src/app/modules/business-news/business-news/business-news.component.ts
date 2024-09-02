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

  itemsPerPage = 9;
  currentPage = 1;

  ngOnInit(): void {
    this.api.newstvbusinessservice().subscribe((result) => {
      console.log(result.articles);
      // this.topHeadlinesData = result.articles;
      this.topbusinessData = result.articles;
    });
  }
  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.topbusinessData.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
