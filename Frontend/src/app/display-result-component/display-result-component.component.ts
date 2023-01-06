import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-result-component',
  templateUrl: './display-result-component.component.html',
  styleUrls: ['./display-result-component.component.css']
})
export class DisplayResultComponentComponent {
  _api_result = [''];
  @Input()
  public set api_result(res: string[]) {
    this._api_result = res;
  }

  public get api_result() {
    return this._api_result;
  }
}
