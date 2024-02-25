import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jsonData: any;
  title = 'kitchen-display-app';
  constructor() {}

  ngOnInit() {}
}
