import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  enteredTitle = '';
  enteredText = '';

  add = output<{title: string; text: string}>();

  //alternative way by using the @Output decorator
  //@Output() add2 = new EventEmitter<{title: string; text: string}>();



    //with this I access to the #form from the corresponding html element
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  //now using signal
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');


  ngOnInit(): void {
    this.form?.nativeElement.reset();
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.form?.nativeElement);
  }


  onSubmit() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
   // this.form?.nativeElement.reset();


   //using 2-ways binding
   this.enteredTitle = '';
   this.enteredText = '';
  }
}
