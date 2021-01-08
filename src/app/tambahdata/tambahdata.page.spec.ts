import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahdataPage } from './tambahdata.page';

describe('TambahdataPage', () => {
  let component: TambahdataPage;
  let fixture: ComponentFixture<TambahdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahdataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
