import {Component} from '@angular/core';

@Component({

	selector: 'my-web',
	template: `<navbar></navbar>
	<jumbotron></jumbotron>
	<div class= container>
	<router-outlet></router-outlet>
	</div>`,
})
export class webcomponent{}