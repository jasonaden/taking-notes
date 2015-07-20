
// This is a super-simple panel component... it needs many more things, like title/heading, content, footer, etc.
// Just a trial for right now of setting up components.

import {Component, View, coreDirectives} from 'angular2/angular2';

@Component({
	selector: 'panel'
})
@View({
	template: `
	<div class="panel panel-default">
		<content></content>
	</div>`
})
export class Panel {
	
} 
