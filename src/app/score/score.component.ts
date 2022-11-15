import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
})
export class ScoreComponent {
  @Input()
  scorePlayer1!: number;
  @Input()
  scorePlayer2!: number;

  constructor() {}
}
