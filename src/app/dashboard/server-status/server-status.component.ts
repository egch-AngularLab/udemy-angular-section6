import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { interval } from "rxjs";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
//by implementing this interfaces we are forced to define the specific methods
//and we well avoid to have wrong behavior in case of typo of the method
export class ServerStatusComponent implements OnInit {
  //this is kind of enum with a default value ('offline')
  currentStatus: "online" | "offline" | "unknown" = "offline";

  private destroyRef = inject(DestroyRef);

  //better to keep your constructor lean
  constructor() {}

  //better to use this vs using constructor for initialization
  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random(); //0-1(excluded)
      if (rnd < 0.5) {
        this.currentStatus = "online";
      } else if (rnd < 0.9) {
        this.currentStatus = "offline";
      } else {
        this.currentStatus = "unknown";
      }
    }, 5000); //it will be updated every 5s
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log("after view unit");
  }
}
