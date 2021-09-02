import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IGameDatails, IGames} from "../../../../intefaces/IGames";
import {ActivatedRoute, Router} from "@angular/router";
import {GamesService} from "../../../../services/games.service";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit, AfterViewChecked {
  @ViewChild('description')
  gamedescript: ElementRef
  @Input()
  game: IGameDatails

  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.gamesService.getById(id).subscribe(value => {
        this.game = value

      })
    })
  }

  ngOnInit(): void {
  }

  backToGames() {
    history.back()
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
        this.gamedescript.nativeElement.innerHTML = this.game.description
  }
}
