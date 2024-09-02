// import { ChangeDetectorRef, Component } from '@angular/core';
// import { NewstvService } from '../../../service/newstv.service';

// @Component({
//   selector: 'app-news',
//   templateUrl: './news.component.html',
//   styleUrl: './news.component.css',
// })
// export class NewsComponent {
//   itemsPerPage = 9;
//   currentPage = 1;

//   constructor(private api: NewstvService) {}

//   topHeadlinesData: any = [];

//   ngOnInit(): void {
//     this.api.newstvservice().subscribe((result) => {
//       console.log(result.articles);
//       // this.topHeadlinesData = result.articles;
//       this.topHeadlinesData = result.articles;
//     });
//   }

//   get paginatedData() {
//     const start = (this.currentPage - 1) * this.itemsPerPage;
//     const end = start + this.itemsPerPage;

//     return this.topHeadlinesData.slice(start, end);
//   }

//   changePage(page: number) {
//     this.currentPage = page;
//   }
// }

import { ChangeDetectorRef, Component } from '@angular/core';
import { NewstvService } from '../../../service/newstv.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'], // Corrected to styleUrls
})
export class NewsComponent {
  itemsPerPage = 9; // Number of articles to display per page
  currentPage = 1; // Initial page

  topHeadlinesData: any = []; // Array to hold the fetched news articles

  constructor(private api: NewstvService, private cdr: ChangeDetectorRef) {} // Injecting ChangeDetectorRef

  ngOnInit(): void {
    this.api.newstvservice().subscribe((result) => {
      this.topHeadlinesData = result.articles; // Assign fetched articles to topHeadlinesData
      this.cdr.detectChanges(); // Manually trigger change detection to update pagination
    });
  }

  // Slice the articles array to display only the current page's data
  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.topHeadlinesData.slice(start, end);
  }

  // Update current page when a new page is selected
  changePage(page: number) {
    this.currentPage = page;
  }
}
