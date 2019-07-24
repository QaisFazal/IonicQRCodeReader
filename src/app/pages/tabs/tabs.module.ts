import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'qr', loadChildren: '../qr/qr.module#QrPageModule' },
      { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
      { path: 'menu', loadChildren: '../menu/menu.module#MenuPageModule' }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/qr',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
