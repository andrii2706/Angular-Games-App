import { Component, OnInit } from '@angular/core';
import {DevelopersService} from "../../services/developers.service";
import {IDevelopers, IDevelopersFull} from "../../intefaces/IDevelopers";

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {
  totalDevelopers: IDevelopersFull
  developers: IDevelopers[]
  page:number
  constructor(
    private service:DevelopersService
  ) { }

  ngOnInit(): void {
    this.getDevelopers(1)
    this.getAllDevelopers()
  }


  getDevelopers(Newpage: number):void {
    this.service.getPagination(Newpage).subscribe(value => {this.developers = value.results})
  }
  getAllDevelopers(): void{
    this.service.getAll().subscribe(value => this.totalDevelopers = value)
  }
  navigateTo(Newpage:number){
    this.page = Newpage
    this.getDevelopers(Newpage)
  }
}
