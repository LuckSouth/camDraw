import { Component } from '@angular/core';

/**
 * Generated class for the ExitCanvasDrawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exit-canvas-draw',
  templateUrl: 'exit-canvas-draw.html'
})
export class ExitCanvasDrawComponent {

  text: string;

  constructor() {
    console.log('Hello ExitCanvasDrawComponent Component');
    this.text = 'Hello World';
  }

}
