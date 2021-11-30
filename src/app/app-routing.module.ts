import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: HomeComponent },
       { path: '', redirectTo: 'welcome', pathMatch: 'full' },



     //  { path: 'products', component: Products }
    
    
     //err
      { path: '**', component: ErrorComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
