import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { HomeComponent } from './home/home.component';

@NgModule({
imports: [
    CommonModule,
    SharedModuleModule,
    AppRoutingModule
  ],

exports: [
    HeaderComponent,
    AppRoutingModule
],
declarations: [
    HeaderComponent,
    HomeComponent
  ]
})

export class CoreModule {}
