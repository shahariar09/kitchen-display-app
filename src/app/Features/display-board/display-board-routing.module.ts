import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBoardComponent } from './pages/display-board/display-board.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    component: DisplayBoardComponent,
    path:'',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayBoardRoutingModule { }
