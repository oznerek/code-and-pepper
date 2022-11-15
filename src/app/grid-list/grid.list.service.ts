import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GridListService {
  cols!: number;
  rowHeight!: number;

  constructor() {
    this.cols = window.innerWidth < 599 ? 1 : 2;
    this.rowHeight = window.innerWidth < 599 ? 540 : 600;
  }

  onResizeCols(event: any) {
    return event.target.innerWidth < 599 ? 1 : 2;
  }
  onResizeRowHeight(event: any) {
    return event.target.innerWidth < 599 ? 540 : 600;
  }
}
