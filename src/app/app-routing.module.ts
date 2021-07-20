import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'action', loadChildren: () => import('./pages/action-editor/action-editor.module').then(m => m.ActionEditorModule) },
  { path: 'trigger', loadChildren: () => import('./pages/trigger-editor/trigger-editor.module').then(m => m.TriggerEditorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
