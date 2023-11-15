import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-section',
  templateUrl: './pending-section.component.html',
  styleUrls: ['./pending-section.component.css']
})
export class PendingSectionComponent implements OnInit {
  @Input() kotPendingList:any;

  constructor() { }

  ngOnInit() {

    
  }


}
