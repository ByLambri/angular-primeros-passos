import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h3>Counter: {{counter}}</h3>

    <button (click)="increseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increseBy(-1)">-1</button>
    `
})
export class CounterComponent{

  public counter:number = 19;

  increseBy(value: number):void{
    this.counter += value;
  }

  resetCounter(){
    this.counter =19;
  }
}
