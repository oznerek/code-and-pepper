import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GridListModule } from '../grid-list/grid-list-module';
import { ScoreModule } from '../score/score.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [PersonComponent, PeopleComponent],
  imports: [
    PeopleRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    ScoreModule,
  ],
  providers: [],
})
export class PeopleModule {}
