import { Component, OnInit } from '@angular/core';
import {OptimizerService} from "../../services/optimizer.service";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  campaignGroupName: string = '';
  campaignName     : string = '';
  lengthCampaigns  : number = 0;

  //content html
  campaignGroupNameTitle = 'Campaign Group Name';
  campaignNameTitle = 'Campaign Name';
  accountProgress = 'Account Progress';
  campaignsAnalyzed = 'Campaigns Analyzed'

  constructor(private optimizerService: OptimizerService) { }

  ngOnInit(): void {
    this.getCampaignGroup();
    this.getCampaigns();
  }

  getCampaignGroup() {
    this.optimizerService.getCampaignGroup().subscribe(
      (data:any) => {
        this.campaignGroupName = data[0].name
      },
      (err) => {
        console.log(err)
      })
  }

  getCampaigns() {
    this.optimizerService.getCampaigns().subscribe(
      (data:any) => {
        this.campaignName = data[0].name;
        this.lengthCampaigns = data.length;
      },
      (err) => {
        console.log(err)
      })
  }

}
