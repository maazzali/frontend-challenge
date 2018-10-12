import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ArtistsComponent} from './artists/artists.component';
import {LayoutModule} from './layout/layout.module';
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutModule],
      declarations: [
        AppComponent,
        ArtistsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create the artist component', async(() => {
    const fixture = TestBed.createComponent(ArtistsComponent);
    const artist = fixture.debugElement.componentInstance;
    expect(artist).toBeTruthy();
  }));

  it('should render app-navbar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-navbar')).not.toBeNull();
  }));

  it('should render app-artists', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-artists')).not.toBeNull();
  }));
});
