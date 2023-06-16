import { Component } from '@angular/core';
import { HomeComponent } from './home/index';
//import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [HomeComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'woop woop';
  name = 'ninja';
  
  ninja = {
    name: "Diana",
    belt: "Red"
  };

  showMessage: string ='test';


  onNotifyClicked(message: string): void{
    this.showMessage = message;
  }

}
