import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OptimizerService {

  constructor(private http: HttpClient) { }

  getContentData() {
    return this.http.get(environment.dataUrl);
  }

  getCampaignGroup() {
    return this.http.get(environment.campaignGroup);
  }

  getCampaigns() {
    return this.http.get(environment.campaigns);
  }
}
