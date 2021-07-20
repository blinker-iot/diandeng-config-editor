import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Obj2strPipe } from './obj2str.pipe';



@NgModule({
  declarations: [
    Obj2strPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Obj2strPipe
  ]
})
export class PipesModule { }
