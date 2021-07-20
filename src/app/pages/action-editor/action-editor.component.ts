import { Component, OnInit } from '@angular/core';
import { JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-action-editor',
  templateUrl: './action-editor.component.html',
  styleUrls: ['./action-editor.component.scss']
})
export class ActionEditorComponent implements OnInit {
  editorOptions: JsonEditorOptions;
  inputObject = {};

  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
    this.editorOptions.mainMenuBar = false;
    // this.inputObject = JSON.parse(this.editService.exportConfig())
  }

  ngOnInit(): void {
  }

}
