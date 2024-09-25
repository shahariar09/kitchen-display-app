import { Component, HostListener, OnInit } from '@angular/core';
import { data } from 'src/app/data';
import { KitchenDisplayService } from '../../services/kitchen-display.service';
import { Router } from '@angular/router';

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
    private kitchenDisplayService:KitchenDisplayService,
    private router:Router
    
  ) {
    this.startApiCallInterval();
   }

   

  ngOnInit() {
   

    
    setTimeout(() => {
      this.getAllOrdersByUserId()
    }, 10000); 
    


    this.kitchenDisplayService.buttonClick$.subscribe(() => {
      
      this.getAllOrdersByUserId()

    });
  }

  onLogOut(){
    
    this.kitchenDisplayService.logout().subscribe(
      (data)=>{
        debugger
      console.log(data);
      localStorage.removeItem('kds-Credential');
      this.router.navigate(['/']);
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove() {
    // Mouse is moving, set isMouseMoving to true and clear the API call timeout
  }

  startApiCallInterval() {
    // Schedule the initial API call
    this.scheduleApiCall();
  }

  scheduleApiCall() {
    // Set a timeout to make the API call if the mouse is not moving
    var apiCallTimeout = setTimeout(() => {
      if (!this.isMouseMoving) {

        this.getAllOrdersByUserId()
      }

      this.isMouseMoving = false;
      this.scheduleApiCall();
    }, 10000); 
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
