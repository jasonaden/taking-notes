/// <reference path="../../typings/tsd.d.ts" />

// Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';
import {Navigation} from 'components/navigation/navigation';
import {Panel} from 'components/ui-kit/panel';

// App: Top Level Component
@Component({
  selector: 'app' // without [ ] means we are selecting the tag directly,
})
@View({
  // needed in order to tell Angular's compiler what's in the template
  directives: [coreDirectives, Navigation, Panel],
  templateUrl: '/client/components/app.html'
})

export class App {
  title: string;
  constructor() {
    this.title = 'Taking Notes App';
  }
}
