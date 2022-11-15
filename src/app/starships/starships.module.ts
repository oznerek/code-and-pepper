import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ScoreModule } from '../score/score.module';
import { GridListModule } from './../grid-list/grid-list-module';
import { StarshipComponent } from './starship/starship.component';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';

@NgModule({
  declarations: [StarshipComponent, StarshipsComponent],
  imports: [
    CommonModule,
    GridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    ScoreModule,
    StarshipsRoutingModule,
  ],
  providers: [],
})
export class StarshipsModule {}
