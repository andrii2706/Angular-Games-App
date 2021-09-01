import { Component, OnInit } from '@angular/core';
import {IStores} from "../../intefaces/IStores";
import {StoresService} from "../../services/stores.service";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {


  stores: IStores[]

  constructor(
    private storesService:StoresService
  ) { }

  ngOnInit(): void {
    this.storesService.getAll().subscribe(value => this.stores = value.results)
  }
}
