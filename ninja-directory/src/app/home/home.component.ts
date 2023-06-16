import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  homeTitle = "Welcome to the ninja directory!";

  @Input() ninja!: {
    name: string, 
    belt: string
  };

  constructor(){}

  //@Output() onYell = new EventEmitter();

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.notify.emit('Message from child');
  }

  // fireYellEvent(e:any){
  //     this.onYell.emit(e);
  // }


  // myString = "I like dogs";

  // alertMe(val: any){
  //   alert(val);
  // }

  // ninja ={
  //   name: "Annis",
  //   belt: "Black"
  // };
}
