import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data, info } from 'src/app/data';
import { KitchenDisplayService } from '../../services/kitchen-display.service';
import { Sale } from '../../models/sale';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kds-card',
  templateUrl: './kds-card.component.html',
  styleUrls: ['./kds-card.component.css']
})
export class KdsCardComponent implements OnInit {
  @Input() cardType:any;
  @Input() cardData:any;
  infoList: any;
  selectedItemList: any = [];
  isRejectEnabled: boolean = false;
  saleList:Sale[] = [];

  constructor(
    private modalService: NgbModal,
    private kitchenDisplayService:KitchenDisplayService,
    private alert: ToastrService,
  ) { }

  ngOnInit() {
    
  }

  openOrderModifyModal(orderModifyModal:any,kot:any){
    this.isRejectEnabled = false;
    this.getSaleInfoByKotId(orderModifyModal,kot)
  }
  openOrderRejectModal(orderModifyModal:any,kot:any){
    this.isRejectEnabled = true;
    this.getSaleInfoByKotId(orderModifyModal,kot)
  }

  getSaleInfoByKotId(orderModifyModal:any,kot:any){
    
    this.selectedItemList = []
    
    this.kitchenDisplayService.getSaleInfoByKotId(kot).subscribe(
      (data)=>{
        
        this.infoList = data;
        console.log(data);
        
        if(this.isRejectEnabled){
          
          this.selectedItemList = this.infoList; 
        }
     
        this.modalService.open(orderModifyModal, { size: 'lg' });
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

  setFilterColumnList(item:any,event:any){

    if(event.target.checked){

      
      var list = this.infoList.filter((c:any)=>c.Item_id==item.Item_id)
    
      this.selectedItemList = this.selectedItemList.concat(list)
      
      
    }
    else{
      
      var data = this.selectedItemList.filter((c:any)=>c.Item_id==item.Item_id);
      var index = this.selectedItemList.indexOf(data[0]);
      this.selectedItemList.splice(index,data.length);
    }
    console.log(this.selectedItemList);

  }

  setAllFilterColumnList(event:any){
    
    if(event.target.checked){
      Object.assign(this.selectedItemList,this.infoList)
    
    }
    else{
      this.selectedItemList = []
    }
    console.log(this.selectedItemList);
  }
  onChangeStatus(cardData:any,status:any){
    
    var data:any = {};
    Object.assign(data,cardData)
    
    data.KOTStatus = status
    const jsonString = JSON.stringify(data,null, 2); 

    
    this.kitchenDisplayService.updateStatus(jsonString).subscribe(
      (data)=>{
        console.log(data);
        this.emitButtonClick()
      },
      (err)=>{
        console.log(err);
        
      }
    )


}

emitButtonClick() {
  this.kitchenDisplayService.emitButtonClick();
}

prepareToSave(){
  this.selectedItemList.forEach((element:any) => {
    
    var sale:Sale = {};
    sale.SalesID = element.SalesID;
    sale.SaleDT = element.SaleDT;
    sale.SupID = element.SupID;
    sale.CategoryId = element.CategoryId;
    sale.ItemName = element.ItemName;
    sale.OptionsGroupName = element.OptionsGroupName;
    sale.CPU = element.CPU;
    sale.RPU = element.RPU;
    sale.RPU_Text = element.RPU_Text;
    sale.Qty_Text = element.Qty_Text;
    sale.rQty = element.rQty;
    sale.rAmt = element.rAmt;
    sale.cInvoice = element.cInvoice;
    sale.ShopID = element.ShopID;
    sale.PayType = element.PayType;
    sale.TotalCost = element.TotalCost;
    sale.TotalAmt = element.TotalAmt;
    sale.Discount = element.Discount;
    sale.DiscAmt = element.DiscAmt;
    sale.DiscAmtPrd = element.DiscAmtPrd;
    sale.Sc = element.Sc;
    sale.ScAmt = element.ScAmt;
    sale.VAT = element.VAT;
    sale.NetAmt = element.NetAmt;
    sale.PaidAmt = element.PaidAmt;
    sale.Salesman = element.Salesman;
    sale.CounterID = element.CounterID;
    sale.PrvCusID = element.PrvCusID;
    sale.VATPrcnt = element.VATPrcnt;
    sale.DiscPrcnt = element.DiscPrcnt;
    sale.Returned = element.Returned;
    sale.TblNo = element.TblNo;
    sale.Persons = element.Persons;
    sale.Waiter = element.Waiter;
    sale.KOT = element.KOT;
    sale.ServiceCharge = element.ServiceCharge;
    sale.IsHappyHourPrice = element.IsHappyHourPrice;
    sale.OrderNo = element.OrderNo;
    sale.Area = element.Area;
    sale.Instruction = element.Instruction;
    sale.InstructionIDs = element.InstructionIDs;
    sale.IsInvoicePrint = element.IsInvoicePrint;
    sale.Priority = element.Priority;
    sale.VoidReason = element.VoidReason;
    sale.ContinentalRPU = element.ContinentalRPU;
    sale.Department = element.Department;
    sale.isMemberPaid = element.isMemberPaid;
    sale.Item_id = element.Item_id;
    sale.OptionsID = element.OptionsID ;
    sale.AddonsID = element.AddonsID ;
    sale.ItemSL = element.ItemSL ;
    sale.SQty = element.SQty ;
    sale.VQty_Text = element.VQty_Text ;
    sale.Invoice = element.Invoice ;
    sale.UserId = JSON.parse(localStorage.getItem("kds-Credential") || '{}').userid ;
    sale.Waiter = element.Waiter ;
    sale.VoidReason = element.VoidReason = "Rejected by Chef";
    this.saleList.push(sale);
  });
}


onModifyOrReject(){
  
  this.prepareToSave()
  
  this.kitchenDisplayService.updateOrRejectKds(this.saleList).subscribe(
    (data)=>{
      console.log(data);
      this.alert.success("Successfully Updated");
      document.getElementById("orderModifyModalCloseBtn")?.click();
      this.emitButtonClick()
  
    },
    (err)=>{
      console.log(err);
      this.alert.success(err);
      
    }
  )


  
}

stringToInteger(str: string): number {
  return parseInt(str, 10);
}


}
