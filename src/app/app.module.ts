import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingService } from './listing.service';
import { ListingsComponent } from './listings/listings.component';
import { FieldDisplayComponent } from './field-display/field-display.component';
import { NguiMapModule} from '@ngui/map';
import { MapsComponent } from './maps/maps.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ListingsComponent },
  { path: 'maps',      component: MapsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    FieldDisplayComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBoUHjDXAY3bW22jvxrc-ce3zBSjOs4yHs'}),
    NgbModule.forRoot()
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
