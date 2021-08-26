import {Component, Input, OnInit} from '@angular/core';
import {IStories} from "../../../intefaces/IStories";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input()
  // story:IStories
  store:IStories
  constructor() { }

  ngOnInit(): void {
  }

}
