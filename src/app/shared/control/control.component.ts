import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {

  constructor() {
    afterRender(() => {
      console.log('afterRender');

    });

    afterNextRender(() => {
      console.log('afterNextRender');

    });
  }


  ngAfterContentInit(): void {
    
  }
    //just for backward compatibility
  //@HostBinding('class') className = 'control';

  //alternative syntax to use '(click)' on :host
  //@HostListener()

  label = input.required<string>();
  //ElementRef gives us a reference to the page
  private el = inject(ElementRef)

  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  //alternative way to @ContentChild decorator -> signal
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');


  onClick() {
    console.log('clicked');
    console.log(this.el);
    //with signal
    console.log(this.control());

    //with decorator
    //console.log(this.control);
  }


}
