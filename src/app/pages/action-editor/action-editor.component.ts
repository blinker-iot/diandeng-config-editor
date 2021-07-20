import { Component, OnInit } from '@angular/core';
import { JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-action-editor',
  templateUrl: './action-editor.component.html',
  styleUrls: ['./action-editor.component.scss']
})
export class ActionEditorComponent implements OnInit {
  editorOptions: JsonEditorOptions;
  inputObject: item[] = [
    {
      "cmd": { "btn-b": "tap" },
      "text": "玛尼玛尼哄"
    },
    {
      "cmd": { "btn-a": "press" },
      "text": "天王盖地虎"
    },
    {
      "cmd": { "btn-a": "pressup" },
      "text": "宝塔镇河妖"
    },
    {
      "cmd": { "btn-c": "on" },
      "text": "打开?name"
    },
    {
      "cmd": { "btn-c": "off" },
      "text": "关闭?name"
    }
  ];

  listOfData: item[] = []


  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
    this.editorOptions.mainMenuBar = false;
    // this.inputObject = JSON.parse(this.editService.exportConfig())
  }

  ngOnInit(): void {
  }

  getData(e: any) {
    console.log(e);
    this.inputObject = e
  }

}

interface item {
  cmd: object,
  text: string
}
