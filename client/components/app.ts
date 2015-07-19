/// <reference path="../../typings/tsd.d.ts" />

// Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

// App: Top Level Component
@Component({
  selector: 'app' // without [ ] means we are selecting the tag directly,
})
@View({
  // needed in order to tell Angular's compiler what's in the template
  directives: [coreDirectives],
  styles: [`
    .title { margin: 0.5rem 0; }
    .main-content { padding: 0.5rem; }
    .main-nav { margin-bottom: 0.5rem; }
    .error-message {
      display: block;
      color: red;
    }
  `],
  template: `
  <section class="main-content">
    <h1 class="title">{{ title }}</h1>
    <nav class="main-nav">
      <a >Home</a>
      <a >Dashboard</a>
      <a >Todo</a>
    </nav>
  </section>
  `
})

export class App {
  title: string;
  constructor() {
    this.title = 'Taking Notes App';
  }
}
