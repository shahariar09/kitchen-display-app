import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jsonData: any;
  title = 'kitchen-display-app';
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getData().subscribe((data) => {
      this.jsonData = data;
    });
  }
}
