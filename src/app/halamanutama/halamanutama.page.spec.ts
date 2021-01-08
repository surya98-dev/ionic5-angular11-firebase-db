import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HalamanutamaPage } from './halamanutama.page';

describe('HalamanutamaPage', () => {
  let component: HalamanutamaPage;
  let fixture: ComponentFixture<HalamanutamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalamanutamaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HalamanutamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
