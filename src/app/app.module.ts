import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
  DiceRollerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
