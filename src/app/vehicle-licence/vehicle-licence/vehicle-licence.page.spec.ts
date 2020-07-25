import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicleLicencePage } from './vehicle-licence.page';

describe('VehicleLicencePage', () => {
  let component: VehicleLicencePage;
  let fixture: ComponentFixture<VehicleLicencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleLicencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleLicencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
