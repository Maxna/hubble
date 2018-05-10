import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HubbleApiPhotosService {

  constructor(private http: Http) { }

  getByCollection(collection: string) {
    return this.http.get('http://hubblesite.org/api/v3/images/${collection}');
  }

}
