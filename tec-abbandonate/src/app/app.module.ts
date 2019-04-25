import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { NavFilterComponent } from './nav-filter/nav-filter.component';
import { NavMainComponent } from './nav-main/nav-main.component';

import { AppRoutingModule }     from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { ArchivioComponent } from './archivio/archivio.component';
import { HomeComponent } from './home/home.component';
import { TimefilterComponent } from './timefilter/timefilter.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavFilterComponent,
    NavMainComponent,
    TimelineComponent,
    ArchivioComponent,
    HomeComponent,
    TimefilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
