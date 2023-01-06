import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MakeapirequestService} from '../services/makeapirequest.service'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  favoriteColorControl = new FormControl('');
  @Output()
  onChanged = new EventEmitter<string[]>();
  englishText = "";
  constructor(private wx: MakeapirequestService) {}

  async onSubmit() { 
    console.log(this.englishText);
    this.wx.translateText(this.englishText)
      .subscribe(
        (response: any) => {
          let translation = response['translated'];
          console.log(response);
          console.log(translation);
          this.onChanged.emit([translation, translation, translation]);
        },
        (error: any) => {
          console.log(error);
        }
      )
  }
}