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
  itemsPerPage = 9;
  currentPage = 1;

  ngOnInit(): void {
    this.api.newstvtechservice().subscribe((result) => {
      console.log(result.articles);
      // this.topHeadlinesData = result.articles;
      this.toptechData = result.articles;
    });
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.toptechData.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
