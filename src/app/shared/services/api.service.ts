import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
//import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
//import { Observable } from "rxjs";
//import "rxjs/add/observable/throw";
//import "rxjs/add/operator/catch";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor() {}

  getIncidents(requestObj: any) {
    const apiPath = "/incidents";

    const path = `${environment.api_url}${apiPath}?query=${requestObj.query}&occurred_before=${requestObj.occurred_before}&occurred_after=${requestObj.occurred_after}`;

    return fetch(path);
  }

  getIncidentDetails(requestObj: any) {
    const apiPath = "/incidents";

    const path = `${environment.api_url}${apiPath}/${requestObj.id}`;

    return fetch(path);
  }

  getLocations(api_url) {
    //const apiPath = "/locations";

    //  const path = `${environment.api_url}${apiPath}`;

    return fetch(api_url);
  }
}
