import {Component, Input, OnInit} from '@angular/core';
import {IGames, IGamesFull} from "../../../intefaces/IGames";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input()
  game:IGames
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  showGames() {
    this.router.navigate([this.game.id],{relativeTo: this.activatedRoute})
  }
}
