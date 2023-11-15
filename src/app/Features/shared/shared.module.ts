import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TOAST_CONFIG, ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  declarations: [],
  providers: [
    ToastrService,
    
    // ... other providers
  ],
})
export class SharedModule { }
