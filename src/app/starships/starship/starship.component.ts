import { Component, Input } from '@angular/core';
import { Starship } from 'src/app/model/starship.model';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
})
export class StarshipComponent {
  @Input()
  starship!: Starship;

  @Input()
  player: 'Player1' | 'Player2' = 'Player1';

  get playerImage() {
    return this.player === 'Player1'
      ? './../../../assets/images/starship1.jpg'
      : './../../../assets/images/starship2.jpg';
  }

  get playerCrew() {
    return this.starship.crew !== 'unknown' ? this.starship.crew : 0;
  }
}
