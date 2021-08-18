import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {OptimizerService} from "../../services/optimizer.service";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() clickedItemMenu = new EventEmitter<object>();

  activeItem  : number = 0;
  menuOptions : any[] = [];

  //content html
  scenarioSelected :string = 'Scenario selected'
  HighCpa          :string = 'High CPA'


  itemClicked(option:object, i:number){
    this.activeItem = i;
    this.clickedItemMenu.emit(option);
  }

  constructor(private optimizerService: OptimizerService) { }

  ngOnInit(): void {
    this.getContentData();
  }

  getContentData() {
    this.optimizerService.getContentData().subscribe(
      (data:any) => {
        data.forEach((option:{}) => {
          this.menuOptions.push(option);
        })
      },
      (err) => {
        console.log(err)
      })
  }

}
