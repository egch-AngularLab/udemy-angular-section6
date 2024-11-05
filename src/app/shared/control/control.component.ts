import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
    //just for backward compatibility
  //@HostBinding('class') className = 'control';

  //alternative syntax to use '(click)' on :host
  //@HostListener()

  label = input.required<string>();
  //ElementRef gives us a reference to the page
  private el = inject(ElementRef)


  onClick() {
    console.log('clicked');
    console.log(this.el);
  }


}
