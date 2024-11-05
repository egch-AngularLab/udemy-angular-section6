import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //this disable the stylesheet encapsulation
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }

})
export class ControlComponent {
  label = input.required<string>();
  //just for backward compatibility
  //@HostBinding('class') className = 'control';

  //alternative syntax to use '(click)' on :host
  //@HostListener()

  onClick() {
    console.log('clicked');
  }


}
