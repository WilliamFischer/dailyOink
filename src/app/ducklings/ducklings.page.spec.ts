import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DucklingsPage } from './ducklings.page';

describe('DucklingsPage', () => {
  let component: DucklingsPage;
  let fixture: ComponentFixture<DucklingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DucklingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DucklingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
