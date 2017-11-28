import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'edit', component: ItemComponent },
  { path: 'add', component: AddComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],

  imports: [
  	RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
