import {Component, Input, OnInit} from '@angular/core';
import {IGameDatails, IGames} from "../../../../intefaces/IGames";
import {ActivatedRoute, Router} from "@angular/router";
import {GamesService} from "../../../../services/games.service";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  @Input()
  game: IGameDatails
  constructor(
    private activatedRoute:ActivatedRoute,
    private gamesService:GamesService
  ) {
   this.activatedRoute.params.subscribe(({id})=>{
     this.gamesService.getById(id).subscribe(value => this.game = value)
   })
  }

  ngOnInit(): void {
  }
  backToGames(){
   history.back()
  }
}
