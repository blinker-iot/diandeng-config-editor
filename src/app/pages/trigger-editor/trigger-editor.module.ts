import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriggerEditorComponent } from './trigger-editor.component';
import { RouterModule } from '@angular/router';
import { NgJsonEditorModule } from 'ang-jsoneditor';



@NgModule({
  declarations: [
    TriggerEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TriggerEditorComponent
      }
    ]),
    NgJsonEditorModule
  ]
})
export class TriggerEditorModule { }
