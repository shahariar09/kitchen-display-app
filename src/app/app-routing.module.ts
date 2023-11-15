import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Features/auth/components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  {
    path: 'kitchen-display',
    loadChildren: () => import('./Features/display-board/display-board.module').then(m => m.DisplayBoardModule)
   },
  {
    path: '',
    loadChildren: () => import('./Features/auth/auth.module').then(m => m.AuthModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
