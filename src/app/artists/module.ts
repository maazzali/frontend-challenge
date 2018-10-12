import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/module';

import { ArtistsService } from './artists.service';
import { ArtistEventsComponent } from './artist-events/artist-events.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { LoaderComponent } from '../misc/loader.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    ArtistEventsComponent,
    ArtistDetailsComponent,
  ],
  declarations: [ArtistEventsComponent, ArtistDetailsComponent, LoaderComponent],
  providers: [ArtistsService]
})
export class ArtistsModule {}
