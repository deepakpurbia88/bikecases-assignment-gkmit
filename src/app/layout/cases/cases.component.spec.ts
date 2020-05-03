import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CasesComponent } from "./cases.component";
import { CasesModule } from "./cases.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

describe("CasesComponent", () => {
  let component: CasesComponent;
  let fixture: ComponentFixture<CasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CasesComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        CasesModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("component form initial state", () => {
    expect(component.casesListForm).toBeDefined();
    expect(component.casesListForm.valid).toBeTruthy();
  });

  it("created a form with filter like search, from date and to date", () => {
    const filtercontainer = fixture.debugElement.nativeElement.querySelector(
      "#filter-container"
    );

    expect(filtercontainer).toBeDefined();
  });

  it("created a form with cases list container", () => {
    const casescontainer = fixture.debugElement.nativeElement.querySelector(
      "#cases-container"
    );

    expect(casescontainer).toBeDefined();
  });

  it("created a form with pagination", () => {
    const paginationcontainer = fixture.debugElement.nativeElement.querySelector(
      "#pagination-container"
    );

    expect(paginationcontainer).toBeDefined();
  });

  it("created a form with loading div", () => {
    const loadingcontainer = fixture.debugElement.nativeElement.querySelector(
      "#loading-container"
    );

    expect(loadingcontainer).toBeDefined();
  });

  it("should be true when filter form submit", () => {
    component.getCases();
    expect(component.submitted).toBeTruthy();
  });
});
