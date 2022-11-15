import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { People, Person } from './../model/person.model';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent implements OnInit {
  loading = true;
  findWinner = false;
  player1!: Person;
  player2!: Person;
  selectedPlayer = new FormControl<Person | null>(null);
  peopleList: Array<Person> = [];
  scorePlayer1 = 0;
  scorePlayer2 = 0;

  constructor(
    private peopleService: PeopleService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllPeople();
  }

  private getAllPeople(): void {
    this.peopleService.getAll().subscribe({
      next: (data: People) => {
        this.peopleList = [...data.results];
        this.checkIfLoadMore(data.next);
      },
      error: () => this.fetchError(),
    });
  }

  private getNextPeople(page: string): void {
    this.peopleService.getNextPeople(page).subscribe({
      next: (data: People) => {
        this.peopleList = [...this.peopleList, ...data.results];
        this.checkIfLoadMore(data.next);
      },
      error: () => this.fetchError(),
    });
  }

  private checkIfLoadMore(url: string): void {
    url ? this.getNextPeople(url) : (this.loading = false);
  }

  private fetchError(): void {
    this.openSnackBar(
      'Coś poszło nie tak, Nie udało się załadować postaci do gry, spróbuj ponownie'
    );
    this.loading = false;
  }

  protected play(hasSelectedPlayer?: boolean): void {
    this.player1 = this.peopleList[this.getPlayer()];
    this.player2 =
      hasSelectedPlayer && this.selectedPlayer
        ? this.selectedPlayer.value!
        : this.peopleList[this.getPlayer()];
    this.findWinner = true;

    setTimeout(() => {
      this.getWinner();
    }, 2500);
  }

  private getPlayer(): number {
    return Math.floor(Math.random() * this.peopleList.length + 1);
  }

  private getWinner(): void {
    const massPlayer1 = this.getMass(this.player1.mass);
    const massPlayer2 = this.getMass(this.player2.mass);
    console.log(massPlayer1, massPlayer2);
    massPlayer1 > massPlayer2
      ? ((this.scorePlayer1 += 1), this.openSnackBar('Player 1 win'))
      : massPlayer2 > massPlayer1
      ? ((this.scorePlayer2 += 1), this.openSnackBar('Player 2 win'))
      : this.openSnackBar('We have remis');
    this.findWinner = false;
  }
  private getMass(mass: string): number {
    return mass !== 'unknown' ? parseFloat(mass) : 0;
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, undefined, { duration: 3000 });
  }

  protected backToHome(): void {
    this.router.navigate(['/']);
  }
}
