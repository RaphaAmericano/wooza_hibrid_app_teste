import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public about_text:string = 'Esse é um aplicativo desenvolvido para o teste da Wooza, com Ionic e Angular'
  constructor() {}

}
