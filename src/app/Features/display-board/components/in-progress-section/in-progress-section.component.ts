import { Component, Input, OnInit } from '@angular/core';
import { KitchenDisplayService } from '../../services/kitchen-display.service';

@Component({
  selector: 'app-in-progress-section',
  templateUrl: './in-progress-section.component.html',
  styleUrls: ['./in-progress-section.component.css']
})
export class InProgressSectionComponent implements OnInit {
  @Input() koInProgressList:any;
  constructor() { }

  ngOnInit() {
    

  }



  

}
