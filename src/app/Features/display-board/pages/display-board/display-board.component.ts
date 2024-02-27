import { Component, HostListener, OnInit } from '@angular/core';
import { data } from 'src/app/data';
import { KitchenDisplayService } from '../../services/kitchen-display.service';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.scss']
})
export class DisplayBoardComponent implements OnInit {
  kotList: any;
  kotPendingList: any;
  koInProgressList: any;
  kotCompleteList: any;
  intervalId: any;




  isMouseMoving = false;
  apiCallTimeout: any;


  constructor(
    private kitchenDisplayService:KitchenDisplayService
    
  ) {
    this.startApiCallInterval();
   }

  ngOnInit() {
   

    
    setTimeout(() => {
      this.getAllOrdersByUserId()
    }, 500); 
    
    // this.kotList = data;

    this.kitchenDisplayService.buttonClick$.subscribe(() => {
      
      this.getAllOrdersByUserId()
      // Add any additional logic you want to execute when the button is clicked.
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove() {
    // Mouse is moving, set isMouseMoving to true and clear the API call timeout
    this.isMouseMoving = true;
  }

  startApiCallInterval() {
    // Schedule the initial API call
    this.scheduleApiCall();
  }

  scheduleApiCall() {
    // Set a timeout to make the API call if the mouse is not moving
    var apiCallTimeout = setTimeout(() => {
      if (!this.isMouseMoving) {
        // Perform your API call here
        this.getAllOrdersByUserId()
      }
      // Reset the flag and schedule the next API call
      this.isMouseMoving = false;
      this.scheduleApiCall();
    }, 6000); // 10 seconds
  }



  getAllOrdersByUserId(){
    
    
    var login = JSON.parse(localStorage.getItem("kds-Credential") || '{}')
    this.kitchenDisplayService.getAllOrdersByUserId(login.userid).subscribe(
      (data)=>{
       this.kotList= data;
       
       this.kotPendingList = this.kotList?.filter((c:any)=>c.KOTStatus=='NEW')
       this.koInProgressList = this.kotList?.filter((c:any)=>c.KOTStatus==='PROCESSING');
       this.kotCompleteList = this.kotList?.filter((c:any)=>c.KOTStatus=='COMPLETE')
        console.log(data);
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

}
