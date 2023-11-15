import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayBoardRoutingModule } from './display-board-routing.module';
import { PendingSectionComponent } from './components/pending-section/pending-section.component';
import { DisplayBoardComponent } from './pages/display-board/display-board.component';
import { KdsCardComponent } from './components/kds-card/kds-card.component';
import { InProgressSectionComponent } from './components/in-progress-section/in-progress-section.component';
import { CompleteSectionComponent } from './components/complete-section/complete-section.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { KitchenDisplayService } from './services/kitchen-display.service';


@NgModule({
  declarations: [
    PendingSectionComponent,
    DisplayBoardComponent,
    KdsCardComponent,
    InProgressSectionComponent,
    CompleteSectionComponent
  ],
  imports: [
    CommonModule,
    DisplayBoardRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  
  providers: [KitchenDisplayService],
  
})
export class DisplayBoardModule { }
