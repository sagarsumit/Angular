import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Import Routing Modules From App-Routing
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoticeDisplayComponent } from './notice-display/notice-display.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NoticeDisplayComponent  // Import all components routes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule			// Form Module
  ],
  providers: [],			// For Services
  bootstrap: [AppComponent]		// KickStart to app.component.ts
})
export class AppModule { }
