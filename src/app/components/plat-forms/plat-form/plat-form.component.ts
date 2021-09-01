import {Component, Input, OnInit} from '@angular/core';
import {IPlatforms} from "../../../intefaces/IPlatforms";

@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styleUrls: ['./plat-form.component.scss']
})
export class PlatFormComponent implements OnInit {
  @Input()
  platfrom : IPlatforms
  constructor() { }

  ngOnInit(): void {
  }

}
