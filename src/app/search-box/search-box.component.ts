import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() filterChange = new EventEmitter();
  starsArray: number[][] = [[1, 2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 2, 3],
  [1, 2],
  [1]
  ];
  selectedStars: any[] = [{ selected: false, stars: 5 },
  { selected: false, stars: 4 },
  { selected: false, stars: 3 },
  { selected: false, stars: 2 },
  { selected: false, stars: 1 }];
  filters: any = {
    nameFilter: '',
    stars: []
  }
  allStars: any = true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filters/search.svg'));

    iconRegistry.addSvgIcon(
      'star',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filters/star.svg'));
  }

  ngOnInit() {
  }

  allStarsSelected(allStars){
    if(allStars){
      this.selectedStars.forEach(function(selectedStar){
        selectedStar.selected = false;
      });
      this.filters.stars = [];
    }
    else{
      let selectedStar = this.selectedStars.filter(function(selectedStar){ return selectedStar.selected });
      if (!selectedStar.length){
        allStars = true;
      }
    }
    this.getHotels(this.filters);
  }

  filterSelected(starsNumber) {
    this.allStars = false;
    if (this.selectedStars[starsNumber].selected) {
      this.filters.stars.push(this.selectedStars[starsNumber].stars);
    }
    else {
      let index = this.filters.stars.indexOf(this.selectedStars[starsNumber].stars);
      this.filters.stars.splice(index, 1);
    }
    this.getHotels(this.filters);
  }

  getHotels(filters) {
    this.filterChange.emit(filters);
  }

}
