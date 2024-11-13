import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
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

//I implement the interface in order to avoid typo
export class NewTicketComponent implements OnInit, AfterViewInit{

    //with this I access to the #form from the corresponding html element
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  //now using signal
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');


  ngOnInit(): void {
    console.log('ONINIT');
    this.form?.nativeElement.reset();
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.form?.nativeElement);
  }


  onSubmit(title: string, ticketText: string) {
    console.dir(title);
    console.dir(ticketText);
    this.form?.nativeElement.reset();
  }
}
