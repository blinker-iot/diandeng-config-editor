import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionEditorComponent } from './action-editor.component';
import { RouterModule } from '@angular/router';
import { NgJsonEditorModule } from 'ang-jsoneditor';



@NgModule({
  declarations: [
    ActionEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActionEditorComponent
      }
    ]),
    NgJsonEditorModule
  ]
})
export class ActionEditorModule { }
