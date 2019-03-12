import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})
export class AppComponent implements OnInit{

   seconds: number;
   counterSubscription: Subscription;

   constructor() {
   }

   ngOnInit(){
     const counter = interval(1000);
     this.counterSubscription = counter.subscribe(
       (value) => {
         this.seconds = value;
       },
       (error) => {
         console.log('Uh-oh, an error occurred! : ' + error);
       },
       () => {
         console.log('Observable complete!');
       }
     );
   }

   ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
