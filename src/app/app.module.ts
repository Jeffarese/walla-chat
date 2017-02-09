import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {AngularFireModule} from "angularfire2";
export const config = {
	apiKey: "AIzaSyA4RKIKsTSe__lRgCmyMvs18S8m94rVKDM",
	authDomain: "walla-chat.firebaseapp.com",
	databaseURL: "https://walla-chat.firebaseio.com",
	storageBucket: "walla-chat.appspot.com",
	messagingSenderId: "425848262014"
};

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent
	],
	imports:      [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		AngularFireModule.initializeApp(config)
	],
	providers:    [],
	bootstrap:    [AppComponent]
})
export class AppModule {
}
