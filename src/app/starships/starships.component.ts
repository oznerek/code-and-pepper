import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Starship, Starships } from './../model/starship.model';
import { StarshipsService } from './starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
})
export class StarshipsComponent implements OnInit {
  loading = true;
  findWinner = false;
  player1!: Starship;
  player2?: Starship;
  selectedPlayer = new FormControl<Starship | null>(null);
  starshipsList: Array<Starship> = [];
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  winner1 = false;
  winner2 = false;

  constructor(
    private starshipsService: StarshipsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllStrships();
  }

  private getAllStrships(): void {
    this.starshipsService.getAll().subscribe({
      next: (data: Starships) => {
        this.starshipsList = [...data.results];
        this.checkIfLoadMore(data.next);
        this.loading = false;
      },
      error: () => this.fetchError(),
    });
  }
  private getNextStarships(page: string): void {
    this.starshipsService.getNextStarships(page).subscribe({
      next: (data: Starships) => {
        this.starshipsList = [...this.starshipsList, ...data.results];
        this.checkIfLoadMore(data.next);
      },
      error: () => this.fetchError(),
    });
  }

  private checkIfLoadMore(url: string): void {
    url ? this.getNextStarships(url) : (this.loading = false);
  }
  private fetchError(): void {
    this.openSnackBar(
      'Coś poszło nie tak, Nie udało się załadować statków do gry, spróbuj ponownie'
    );
    this.loading = false;
  }
  protected play(hasSelectedPlayer?: boolean): void {
    this.winner1 = false;
    this.winner2 = false;
    this.player1 = this.starshipsList[this.getPlayer()];
    this.player2 =
      hasSelectedPlayer && this.selectedPlayer
        ? this.selectedPlayer.value!
        : this.starshipsList[this.getPlayer()];

    this.findWinner = true;

    setTimeout(() => {
      this.getWinner();
    }, 2500);
  }

  private getPlayer(): number {
    return Math.floor(Math.random() * this.starshipsList.length);
  }

  private getWinner(): void {
    const crewPlayer1 = this.getCrew(this.player1.crew);
    const crewPlayer2 = this.getCrew(this.player2!.crew);

    crewPlayer1 > crewPlayer2
      ? ((this.scorePlayer1 += 1),
        this.openSnackBar('Player 1 win'),
        (this.winner1 = true))
      : crewPlayer2 > crewPlayer1
      ? ((this.scorePlayer2 += 1),
        this.openSnackBar('Player 2 win'),
        (this.winner2 = true))
      : this.openSnackBar('We have remis');
    this.findWinner = false;
  }
  private getCrew(crew: string): number {
    return crew !== 'unknown' ? parseFloat(crew) : 0;
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, undefined, { duration: 3000 });
  }

  protected backToHome(): void {
    this.router.navigate(['/']);
  }
}
