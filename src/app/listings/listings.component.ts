import { Component, OnInit, OnChanges } from '@angular/core';
import { Listing } from '../listing';
import { ListingService } from '../listing.service';
import { Observable } from 'rxjs/Observable';
import { NguiMapComponent } from '@ngui/map';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  public listings: any;
  page: number;
  positions: any;
  pageSize: number;
  show = false;
  loc: any;
  total: Observable<number>;
  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.loadTotal();
    this.loadPage()
  }

  loadTotal() {
    this.total = this.listingService.getListingsCount();
  }
  loadPage() {
    this.listingService.getListings(this.pageSize, (this.page - 1) * this.pageSize).subscribe(data => {
    this.listings = data;
    this.loc = this.listings
    });
  }

  pageChange(value: any) {
    this.loadPage();
  }

  showMaps() {
  this.show = true;
  }
ngOnChange() {
this.listings.unsubscribe();
}

  hide() {
    this.show = false;
  }
}
