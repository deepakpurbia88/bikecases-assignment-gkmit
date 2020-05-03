import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CasedetailsRoutingModule } from "./casedetails-routing.module";
import { CasedetailsComponent } from "./casedetails.component";
import { AgmCoreModule } from "@agm/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [CasedetailsComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCiSkdwt1E58g7WN7G2LLFW3O2AnWMDW5k",
    }),
    CommonModule,
    CasedetailsRoutingModule,
  ],
})
export class CasedetailsModule {}
