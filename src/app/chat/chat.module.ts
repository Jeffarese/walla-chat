import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from "./chat.component";
import {MessageService} from "./message/message.service";

@NgModule({
	imports:      [
		CommonModule
	],
	providers: [
		MessageService
	],
	declarations: [
		ChatComponent
	]
})
export class ChatModule {
}
