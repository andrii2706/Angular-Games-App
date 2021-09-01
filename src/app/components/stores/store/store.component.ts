import {Component, Input, OnInit} from '@angular/core';
import {IStores} from "../../../intefaces/IStores";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  @Input()
  store: IStores
  constructor() { }

  ngOnInit(): void {
  }

}
