import { Component } from '@angular/core';
import { GridListService } from './grid.list.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
})
export class GridListComponent {
  cols!: number;
  rowHeight!: number;

  constructor(private gridListService: GridListService) {}
  ngOnInit() {
    this.cols = this.gridListService.cols;
    this.rowHeight = this.gridListService.rowHeight;
  }
  protected onResize(event: any) {
    this.cols = this.gridListService.onResizeCols(event);
    this.rowHeight = this.gridListService.onResizeRowHeight(event);
  }
}
