import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";
import {AngularFireModule} from "angularfire2";
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './chat/message/message.component';
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
		ChatComponent,
		MessageComponent
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
