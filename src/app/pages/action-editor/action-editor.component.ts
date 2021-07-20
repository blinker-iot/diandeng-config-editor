import { Component, OnInit } from '@angular/core';
import { JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-action-editor',
  templateUrl: './action-editor.component.html',
  styleUrls: ['./action-editor.component.scss']
})
export class ActionEditorComponent implements OnInit {
  editorOptions: JsonEditorOptions;
  inputObject = [
    {
      "cmd": { "clz": "tap" },
      "text": "天王盖地虎"
    },
    {
      "cmd": { "blinker": "tap" },
      "text": "宝塔镇河妖"
    },
    {
      "cmd": { "btn-a": "on" },
      "text": "打开?name"
    },
    {
      "cmd": { "btn-a": "off" },
      "text": "关闭?name"
    }
  ];

  listOfData = []


  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
    this.editorOptions.mainMenuBar = false;
    // this.inputObject = JSON.parse(this.editService.exportConfig())
  }

  ngOnInit(): void {
  }

}
