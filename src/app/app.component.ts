import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pips';
  name :string='';
  date :string='';

  ONchangename(value:string){
    this.name = value;
  }
  ONchangedate(value:string){
    this.date = value;
  }
}
