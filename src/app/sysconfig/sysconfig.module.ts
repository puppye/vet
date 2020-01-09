import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysconfigComponent } from './sysconfig.component';
import { SplashComponent } from './components/splash/splash.component';



@NgModule({
  declarations: [
    SysconfigComponent,
    SplashComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SysconfigComponent
  ]
})
export class SysconfigModule { }
