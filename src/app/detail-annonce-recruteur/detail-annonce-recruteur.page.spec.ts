import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailAnnonceRecruteurPage } from './detail-annonce-recruteur.page';

describe('DetailAnnonceRecruteurPage', () => {
  let component: DetailAnnonceRecruteurPage;
  let fixture: ComponentFixture<DetailAnnonceRecruteurPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAnnonceRecruteurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAnnonceRecruteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
