import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionEditorComponent } from './action-editor.component';
import { RouterModule } from '@angular/router';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    ActionEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgJsonEditorModule,
    NzTableModule,
    PipesModule,
    NzDividerModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActionEditorComponent
      }
    ])
  ]
})
export class ActionEditorModule { }
