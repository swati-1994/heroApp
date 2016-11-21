/**
 * Created by swati on 21/11/16.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/novels">Novels</a>
   </nav>
   <router-outlet></router-outlet>
    <!--<my-novels></my-novels>-->
  `
})




export class AppComponent {
    title = 'Novels';
}