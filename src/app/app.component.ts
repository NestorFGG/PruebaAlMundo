import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HotelService]
})
export class AppComponent implements OnInit{
  
  hotels: Hotel[];
  filters: any = {
    name:'',
    stars:[]
  };
  constructor(private hotelService: HotelService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/logo-almundo.svg'));
  }

  ngOnInit(): void {
    this.getHotels(this.filters);
  }

  filter(filters){
    this.filters.name = filters.nameFilter;
    this.filters.stars = filters.stars;
    this.getHotels(this.filters);
  }
  getHotels(filters) {
    this.hotelService.getHotels(filters).subscribe((hotels) => {
      this.hotels = hotels;
    });
  }
}
