import { Component, OnInit } from '@angular/core';
import {IPlatforms} from "../../intefaces/IPlatforms";
import {PlatformsService} from "../../services/platforms.service";

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {

  page:number
  platforms:IPlatforms[]

  constructor(
    private platformsService:PlatformsService
  ) { }

  ngOnInit(): void {
    this.getPlatforms(1)
  }
  getPlatforms(Newpage:number):void{
    this.platformsService.getPagination(Newpage).subscribe(value =>
      {this.platforms = value.results})
  }
  navigateTo(Newpage:number){
    this.page = Newpage
    this.getPlatforms(Newpage)
  }
}
