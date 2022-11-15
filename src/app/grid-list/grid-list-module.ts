import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListComponent } from './grid-list.component';
@NgModule({
  declarations: [GridListComponent],
  imports: [MatGridListModule],
  exports: [GridListComponent],
})
export class GridListModule {}
