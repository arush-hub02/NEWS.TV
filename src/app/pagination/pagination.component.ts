// import {
//   Component,
//   EventEmitter,
//   Input,
//   OnInit,
//   Output,
//   SimpleChanges,
// } from '@angular/core';
// import { findIndex } from 'rxjs';

// @Component({
//   selector: 'app-pagination',
//   templateUrl: './pagination.component.html',
//   styleUrl: './pagination.component.css',
// })
// export class PaginationComponent implements OnInit {
//   @Input() totalItems: any;
//   @Input() currentPage: any;
//   @Input() itemsPerPage: any;

//   @Output() onClick: EventEmitter<number> = new EventEmitter();

//   totalPages = 0;
//   pages: number[] = [];

//   constructor() {}

//   ngOnInit(): void {
//     if (this.totalItems) {
//       this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
//       this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
//     }
//   }

//   pageClicked(page: number) {
//     if (page > this.totalPages) return;
//     this.onClick.emit(page);
//   }
// }

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'], // Corrected to styleUrls
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: number = 0; // The total number of items (news articles)
  @Input() currentPage: number = 1; // The current active page
  @Input() itemsPerPage: number = 9; // Number of items per page

  @Output() onClick: EventEmitter<number> = new EventEmitter(); // Emit event on page click

  totalPages = 0;
  pages: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.calculatePages(); // Initial calculation of pages on component initialization
  }

  // Recalculate pages whenever the input properties change
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['itemsPerPage']) {
      this.calculatePages();
    }
  }

  // Calculate the total pages and generate an array of page numbers
  calculatePages(): void {
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  // Emit the page number when a page is clicked
  pageClicked(page: number) {
    if (page < 1 || page > this.totalPages) return; // Prevent invalid page numbers
    this.onClick.emit(page);
  }
}
