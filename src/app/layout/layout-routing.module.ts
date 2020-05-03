import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "cases", pathMatch: "prefix" },
      {
        path: "cases",
        loadChildren: () =>
          import("./cases/cases.module").then((m) => m.CasesModule),
      },
      {
        path: "casedetails",
        loadChildren: () =>
          import("./casedetails/casedetails.module").then(
            (m) => m.CasedetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
