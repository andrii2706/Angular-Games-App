import { Component, Input, OnInit } from '@angular/core';
import {IPlatforms} from "../../../intefaces/IPlatforms";

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {

  @Input()
  platfrom : IPlatforms[]
  constructor() { }

  ngOnInit(): void {
  }

}
