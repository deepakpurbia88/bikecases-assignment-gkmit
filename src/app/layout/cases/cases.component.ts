import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../../shared/services/api.service";
import { CaseService } from "../../shared/services/case.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-cases",
  templateUrl: "./cases.component.html",
  styleUrls: ["./cases.component.scss"],
})
export class CasesComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private cs: CaseService,
    private router: Router
  ) {}
  casesListForm: FormGroup;

  casesList = [];

  page = 1;
  pageSize = 10;
  getListErrorFlag = false;
  loadingFlag = false;

  first = "<< First";
  prev = "< Prev";
  next = "Next >";
  last = "Last >>";

  submitted = false;

  ngOnInit(): void {
    this.casesListForm = this.formBuilder.group(
      {
        searchText: ["", []],
        fromDate: ["", []],
        toDate: ["", []],
      },
      { validator: this.checkDates }
    );

    this.getCases();
  }

  async getCases() {
    this.submitted = true;
    if (this.casesListForm.invalid) {
      return;
    } else {
      this.getListErrorFlag = false;
      this.loadingFlag = true;
      const dataObj = {
        query: this.casesListForm.value.searchText,
      };

      if (this.casesListForm.value.fromDate) {
        let occurred_after = this.casesListForm.value.fromDate.getTime();
        console.log("occurred_after: ", occurred_after);
        dataObj["occurred_after"] = occurred_after;
      } else {
        dataObj["occurred_after"] = "";
      }

      if (this.casesListForm.value.toDate) {
        let occurred_before = this.casesListForm.value.toDate.getTime();
        console.log("occurred_before: ", occurred_before);
        dataObj["occurred_before"] = occurred_before;
      } else {
        dataObj["occurred_before"] = "";
      }
      let response = await this.api.getIncidents(dataObj);

      let data = await response.json();
      if (response.status === 200) {
        this.getListErrorFlag = false;
        this.casesList = data.incidents;
        this.loadingFlag = false;
      } else {
        console.log("Data Fetch Error");
        this.getListErrorFlag = true;
        this.loadingFlag = false;
      }
    }
  }

  async getCaseDetails(item) {
    console.log("item", item);

    const dataObj = { id: item.id };
    let response = await this.api.getIncidentDetails(dataObj);

    let data = await response.json();
    if (response.status === 200) {
      this.cs.currentCaseDetails = data.incident;

      this.router.navigate(["/casedetails"]);
    } else {
      console.log("Data Fetch Error");
    }
  }

  checkDates(group: FormGroup) {
    if (group.controls.toDate.value && group.controls.fromDate.value) {
      if (group.controls.toDate.value < group.controls.fromDate.value) {
        return { notValid: true };
      }
    } else {
      return null;
    }
  }
}
