import { Component, OnInit } from '@angular/core';
import {IStories, IStoriesFull} from "../../intefaces/IStories";
import {StoriesService} from "../../services/stories.service";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  stories:IStories[]

  constructor(
    private storiesService:StoriesService
  ) { }

  ngOnInit(): void {
    // this.storiesService.getAllStories().subscribe(value => this.stories = value)
    this.storiesService.getAllStories().subscribe(value => {this.stories = value.results})
  }

}
