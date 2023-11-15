import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-section',
  templateUrl: './complete-section.component.html',
  styleUrls: ['./complete-section.component.css']
})
export class CompleteSectionComponent implements OnInit {
  @Input() kotCompleteList:any;
  constructor() { }

  ngOnInit() {

  }

}
