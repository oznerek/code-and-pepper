import { Component, Input } from '@angular/core';
import { Person } from './../../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input()
  person!: Person;

  @Input()
  player: 'Player1' | 'Player2' = 'Player1';

  get playerImage() {
    return this.player === 'Player1'
      ? './../../../assets/images/person1.jpg'
      : './../../../assets/images/person2.jpg';
  }

  get playerMass() {
    return this.person.mass !== 'unknown' ? this.person.mass : 0;
  }
}
