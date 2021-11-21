import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
   //components
   HeaderComponent,

  ],
  exports: [
    //components
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
