import {Component} from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
	selector:    'app-root',
	templateUrl: './app.component.html',
	styleUrls:   ['./app.component.scss']
})
export class AppComponent {
	constructor(private af: AngularFire) {

	}
}
