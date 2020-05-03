import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CasedetailsComponent } from "./casedetails.component";

import { CasedetailsModule } from "./casedetails.module";

describe("CasedetailsComponent", () => {
  let component: CasedetailsComponent;
  let fixture: ComponentFixture<CasedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CasedetailsComponent],
      imports: [CasedetailsModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("created a form with theft details div", () => {
    const casedetailscontainer = fixture.debugElement.nativeElement.querySelector(
      "#casedetails-container"
    );

    expect(casedetailscontainer).toBeDefined();
  });

  it("added google map location for the theft", () => {
    const googlemaplocation = fixture.debugElement.nativeElement.querySelector(
      "#google-map-location"
    );

    expect(googlemaplocation).toBeDefined();
  });

  it("added image of the theft", () => {
    const imagediv = fixture.debugElement.nativeElement.querySelector(
      "#image-div"
    );

    expect(imagediv).toBeDefined();
  });
});
