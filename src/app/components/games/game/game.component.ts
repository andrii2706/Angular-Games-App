import {Component, Input, OnInit} from '@angular/core';
import {IGames, IGamesFull} from "../../../intefaces/IGames";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input()
  game:IGames
  constructor() { }

  ngOnInit(): void {
  }

}
