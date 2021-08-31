import { Component, OnInit } from '@angular/core';
import {DevelopersService} from "../../services/developers.service";
import {IDevelopers} from "../../intefaces/IDevelopers";

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  developers: IDevelopers[]
  page:number
  constructor(
    private service:DevelopersService
  ) { }

  ngOnInit(): void {
    this.getDevelopers(1)
  }


  getDevelopers(Newpage: number):void {
    this.service.getPagination(Newpage).subscribe(value => {this.developers = value.results})
  }
  navigateTo(Newpage:number){
    this.page = Newpage
    this.getDevelopers(Newpage)
  }
}
