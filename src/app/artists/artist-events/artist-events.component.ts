import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ArtistsService } from '../artists.service';
import { Event } from '../artists.interfaces';

@Component({
  selector: 'app-artist-events',
  templateUrl: './artist-events.component.html',
  styleUrls: ['./artist-events.component.scss']
})
export class ArtistEventsComponent implements OnInit {

  @Input() artistEvent: Event[];
  @Input() artistName: string;
  @Input() loading: boolean;
  @Output() eventTypeEmitter: EventEmitter<string> = new EventEmitter();
  public eventType: string;
  public eventOptions = [
    {
      label: 'All Events',
      value: 'all'
    },
    {
      label: 'Upcoming Events',
      value: 'upcoming'
    },
    {
      label: 'Past Events',
      value: 'past'
    }
  ];

  constructor(private _artistService: ArtistsService) {
  }

  ngOnInit() {
    this.eventType = this.eventOptions[1].value;
    this.eventTypeEmitter.emit(this.eventType);
  }

  getEventType(type: string) {
    this.eventTypeEmitter.emit(type);
    if (this.artistName) {
      this.loading = true;
      this._artistService
        .getArtistEvents(this.artistName, type)
        .subscribe((artistEvents: Event[]) => {
          this.artistEvent = artistEvents;
          this.loading = false;
        });
    }
  }
}
