/// <reference path="../../../typings/tsd.d.ts" />

// Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

// Simple component
@Component({
  selector: 'navigation'
})
@View({
  directives: [coreDirectives],
  templateUrl: '/client/components/navigation/navigation.html'
})
export class Navigation {
  navTitle: string;
  constructor() {
    this.navTitle = "Taking Notes Application"
  }
}
