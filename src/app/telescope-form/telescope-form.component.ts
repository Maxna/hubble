import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HubbleApiPhotosService } from '../hubble-api-photos.service';

@Component({
  selector: 'app-telescope-form',
  templateUrl: './telescope-form.component.html',
  styleUrls: ['./telescope-form.component.css'],
  providers: [ HubbleApiPhotosService ]
})
export class TelescopeFormComponent implements OnInit {
  photos: any[]
  noPhotos: boolean=false;
  constructor(private hubblePhotos: HubbleApiPhotosService) { }

  getHubblePhotos(collection: string, mission: string) {
    this.photos=null;
    this.hubblePhotos.getByCollection(collection).subscribe(response => {
      if(response.json().photos.length > 0) {
        this.photos = response.json();
      }
    });
  }

  ngOnInit() {
  }

}
