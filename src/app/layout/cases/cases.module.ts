import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CasesRoutingModule } from "./cases-routing.module";
import { CasesComponent } from "./cases.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  declarations: [CasesComponent],
  imports: [
    CommonModule,
    CasesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class CasesModule {}
