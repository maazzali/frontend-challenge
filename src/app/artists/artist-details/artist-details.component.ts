import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artists.interfaces';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  @Input() artistDetail: Artist;
  @Input() loading: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
