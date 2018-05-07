import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hotel } from './hotel';

@Injectable()
export class HotelService {

  constructor(private httpClient: HttpClient) { }
  getHotels(filters): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>('/hotels', {
      params: {
        hotelName: filters.name,
        starsNumber: filters.stars
      }
    });
  }

}
