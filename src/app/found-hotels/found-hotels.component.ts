import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { HotelMock } from '../hotel-mock';
import { Hotel } from '../hotel';

const imagePath = 'assets/images/hotels/';

@Component({
  selector: 'app-found-hotels',
  templateUrl: './found-hotels.component.html',
  styleUrls: ['./found-hotels.component.css'],
})

export class FoundHotelsComponent implements OnInit {
  
  @Input() hotels:Hotel[];
  // hotelImage = imagePath + this.hotels[0].image;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIconFilter('star');
  }

  ngOnInit() {
  }

  generateHotelImagePath(hotel: Hotel) {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + imagePath + hotel.image + ')');
  }

  registerIconAmenities(iconName: string) {
    this.iconRegistry.addSvgIcon(
      iconName,
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/' + iconName + '.svg'));
    return iconName;
  }

  registerIconFilter(iconName: string) {
    this.iconRegistry.addSvgIcon(
      iconName,
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filters/' + iconName + '.svg'));
  }

  generateStarsArray(starsNumber: number) {
    return Array(starsNumber);
  }

}