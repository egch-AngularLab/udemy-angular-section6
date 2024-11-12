import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  //with this I access to the #form from the corresponding html element
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;

  //now using signal
  private form = viewChild<ElementRef<HTMLFormElement>>('form');




  onSubmit(title: string, ticketText: string) {
    console.dir(title);
    console.dir(ticketText);
    this.form()?.nativeElement.reset();
  }
}
