import { Component, OnInit } from '@angular/core';
import {IGames, IGamesFull} from "../../intefaces/IGames";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  totalGames: IGamesFull
  games:IGames[]
  page:number
  // gAmes:IGamesFull
  constructor(
    private service:GamesService
  ) { }

  ngOnInit(): void {
    this.getGames(1)
    // this.service.getAll().subscribe(value => {this.games = value.results})
  }

  getGames(Newpage:number):void{
    this.service.getPagination(Newpage).subscribe(value => {this.games =value.results})
  }

  navigateTo(Newpage: number) {
  this.page = Newpage
    this.getGames(Newpage)
  }
  thisFilter():void{

  }
}
