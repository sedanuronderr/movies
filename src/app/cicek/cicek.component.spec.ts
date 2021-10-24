import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CicekComponent } from './cicek.component';

describe('CicekComponent', () => {
  let component: CicekComponent;
  let fixture: ComponentFixture<CicekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicekComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CicekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
