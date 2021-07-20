import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionEditorComponent } from './action-editor.component';
import { RouterModule } from '@angular/router';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActionEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActionEditorComponent
      }
    ]),
    NgJsonEditorModule,
    NzTableModule
  ]
})
export class ActionEditorModule { }
