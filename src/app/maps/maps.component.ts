import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { NguiMapModule} from '@ngui/map';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {
  pageSize = 50;
  page: number;
  info = 'marker info'
  displayInfo = false;
  positions = [];
  loc = [];
  listings: any;
  locations = [];
  city: any;
  listingsdata: any;
   constructor(public listingService: ListingService) { }

ngOnInit() {
    this.page = 1;
    this.listingService.getListings(this.pageSize, (this.page - 1) * this.pageSize).subscribe(data => {
    this.listings = data;
    const array = [];

    for (let index = 0; index < this.listings.length; index++) {

        const latlong = this.listings[index].location.latLong;
        const location = this.listings[index].primary_complex;

        if (latlong && location !== undefined) {
              array.push(this.listings[index].location.latLong);
              this.locations.push(this.listings[index].primary_complex)
            }
    }
    this.positions.push(array);
  });
}

  clicked(event, index) {
      this.displayInfo = true;
      const eve = event.target;
      eve.nguiMapComponent.openInfoWindow('iw', eve)
      this.city = this.locations[index];
      this.listingsdata = this.listings[index];
  }

  hideMarkerInfo() {
      this.displayInfo = false;
  }

}
