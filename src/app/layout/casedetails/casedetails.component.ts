import { Component, OnInit } from "@angular/core";
import { CaseService } from "../../shared/services/case.service";
import { ApiService } from "../../shared/services/api.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-casedetails",
  templateUrl: "./casedetails.component.html",
  styleUrls: ["./casedetails.component.scss"],
})
export class CasedetailsComponent implements OnInit {
  caseDetails;

  constructor(
    private cs: CaseService,
    private api: ApiService,
    private router: Router
  ) {}

  latitude: number;
  longitude: number;
  zoom: number;
  mapLoadError = false;
  caseDetailsFlag = false;

  ngOnInit(): void {
    this.caseDetails = this.cs.currentCaseDetails;

    if (Object.keys(this.caseDetails).length != 0) {
      this.caseDetailsFlag = true;
      this.getCordinates(this.caseDetails.source.api_url);
    } else {
      this.caseDetailsFlag = false;
      this.router.navigate(["/cases"]);
    }
  }

  async getCordinates(api_url) {
    let response = await this.api.getLocations(api_url);

    let data = await response.json();

    if (response.status === 200) {
      console.log("response data: ", data);
      this.latitude = data.lat;
      this.longitude = data.lng;
      this.zoom = 15;
      this.mapLoadError = false;
    } else {
      console.log("Data Fetch Error");
      this.mapLoadError = true;
    }
  }
}
