import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  //this is kind of enum with a default value ('offline')
  currentStatus:  'online' | 'offline' | 'unknown' = 'offline';

  constructor() {
    setInterval(() => {
      const rnd = Math.random(); //0-1(excluded)
      if(rnd<0.5){
        this.currentStatus = 'online';
      }else if (rnd<0.9) {
        this.currentStatus = 'offline';
      }else{
        this.currentStatus = 'unknown';
      }
      
    }, 5000);  //it will be updated every 5s
  }
}
