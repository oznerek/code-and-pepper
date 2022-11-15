import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private router: Router) {}

  goToPeople(): void {
    this.router.navigate(['/people']);
  }
  goToStarships(): void {
    this.router.navigate(['/starships']);
  }

  get peopleImage() {
    return './../../../assets/images/people.jpg';
  }

  get shipsImage() {
    return './../../../assets/images/ships.jpg';
  }
}
