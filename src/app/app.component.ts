import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>

    <ul class="nav nav-pills">
    <li role="presentation"><a routerLink="/sample">Sample Data Display</a></li>
    <li role="presentation"><a style="padding-left: 30px;" routerLink="/restdata">Sample API Data Display</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
  styles:[]
})

export class AppComponent {
  title = 'Sample Angular App';
  
}
