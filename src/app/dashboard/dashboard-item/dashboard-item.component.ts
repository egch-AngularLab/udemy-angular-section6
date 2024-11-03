import { Component, input } from '@angular/core';
//import { Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
/*   host: {
    class: 'dashboard-item'
  } */
})
export class DashboardItemComponent {

//alternative way with decorator
/*  
 @Input({required: true}) image!: {
    src: string;
    alt: string
  }; 
  //! means it will be never undefined
  @Input({required: true}) title!: string
  */

image = input.required<{
  src: string;
  alt: string
}>()
title = input.required<string>();

}
