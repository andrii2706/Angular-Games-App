import { Component, OnInit } from '@angular/core';
import {IPlatfomrFull, IPlatforms} from "../../intefaces/IPlatforms";
import {PlatformsService} from "../../services/platforms.service";

@Component({
  selector: 'app-plat-forms',
  templateUrl: './plat-forms.component.html',
  styleUrls: ['./plat-forms.component.scss']
})
export class PlatFormsComponent implements OnInit {
  totalCount: IPlatfomrFull
  page:number
  platforms:IPlatforms[]

  constructor(
    private platformsService:PlatformsService
  ) { }

  ngOnInit(): void {
    this.getPlatforms(1)
    this.getTotalCount()
  }
  getTotalCount():void{
    this.platformsService.gatTotalItems().subscribe(value => this.totalCount = value)
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
