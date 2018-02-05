import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  paginTotalItems = 64;
  paginCurrentPage = 4;
  paginNumPages = 0;

  paginMaxSize = 5;
  paginBigTotalItems = 175;
  paginBigCurrentPage = 1;


  setPage(pageNo: number): void {
    this.paginCurrentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
  constructor() { }

  ngOnInit() {
  }

}
