import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css'],
  providers: [ ]
})
export class ImagesListComponent implements OnInit {
  @Input() childPhotos;
  constructor() { }

  ngOnInit() {
  }

}
