// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from "./app-routing.module";

// Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatCommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSidenavModule,
    MatMenuModule
    // Any other modules you want to import here (Remember to include them in the import section below)
} from '@angular/material';

// Custom app Modules
import { AppComponent } from './app.component';
// Remove if using lazy-loading (This will be imported in leave-application.module.ts instead)
import { LeaveApplicationRequestComponent } from './leave-application-request/leave-application-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaveApplicationRequestComponent // Remove if using lazy-loading
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSidenavModule,
    MatMenuModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
