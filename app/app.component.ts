/**
 * Created by swati on 18/11/16.
 */
import {Component} from '@angular/core';
export class Novel {
    type:string;
    name:string;
}


const NOVELS:Novel[] = [
    {type: 'Scientific', 'name': 'Deception Point'},
    {type: 'Thriller', 'name': 'Girl with the dragon tattoo'},
    {type: 'thriller', 'name': 'if tomorrow comes'},
    {type: 'fiction', 'name': 'Inferno'},
    {type: 'fiction', 'name': 'Twilight'},
    {type: 'fiction', 'name': 'Thousand Splendid suns'}
];

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
<h2>My favourite reads:</h2>
 <ul class="style">
 
 <li *ngFor="let novel of novels" (click)="onSelect(novel)">
  <span class="badge">{{novel.type}}</span> {{novel.name}}
</li>
 
 
 
 <!--<li *ngFor="let novel of novels  (click)= "onSelect(novel)">-->
   <!--<span class="badge">{{novel.type}}</span> {{novel.name}}>-->
<!--</li> -->
 </ul>

    <h2>Let us read about {{novel.name}}!  </h2>
        <div>
        <label>name:</label>
        <input [(ngModel)]="novel.name" placeholder="name">
    </div>`,

    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .style {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .style li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .style li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .style li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .style .text {
    position: relative;
    top: -3px;
  }
  .style .badge{
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]


})
export class AppComponent {

    novels = NOVELS;

    title = 'Novels';
    novel:Novel = {

        type: 'Fiction',
        name: 'Emma'

    };

    selectedNovel: Novel;

}