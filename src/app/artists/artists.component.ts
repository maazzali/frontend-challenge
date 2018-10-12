import { Component, OnInit } from '@angular/core';
import { ArtistsService } from './artists.service';

import { mergeMap } from 'rxjs/operators';
import { Artist, Event } from './artists.interfaces';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public artistDetails: Artist;
  public artistEvents: Event[];
  public selectedEventType: string;
  public isLoading: boolean;

  constructor(private _artistService: ArtistsService) {
    this.artistEvents = [];
    this.isLoading = false;
  }

  ngOnInit() {
  }

  public search(artistName: string): void {
    if (artistName) {
      this.isLoading = true;
      this._artistService
        .getArtistDetail(artistName)
        .pipe(
          mergeMap((artistDetails: Artist) => {
            this.artistDetails = artistDetails;
            return this._artistService.getArtistEvents(artistName, this.selectedEventType);
          })
        ).subscribe((artistEvents: Event[]) => {
        this.artistEvents = artistEvents;
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
        this.artistEvents = [];
        this.artistDetails = null;
      });
    }
  }

  public updateEventType(type: string): void {
    this.selectedEventType = type;
  }
}
