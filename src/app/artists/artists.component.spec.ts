import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsComponent } from './artists.component';
import { ArtistEventsComponent } from './artist-events/artist-events.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

describe('ArtistsComponent', () => {
  let component: ArtistsComponent;
  let fixture: ComponentFixture<ArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsComponent, ArtistEventsComponent, ArtistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-artist-events', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-artists-events')).not.toBeNull();
  }));

  it('should render app-artist-details', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-artists-details')).not.toBeNull();
  }));
});
