import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepetekleComponent } from './sepetekle.component';

describe('SepetekleComponent', () => {
  let component: SepetekleComponent;
  let fixture: ComponentFixture<SepetekleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepetekleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepetekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
