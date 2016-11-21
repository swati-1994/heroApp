import {Component, Input} from '@angular/core';
import {Novel} from './novel';
@Component({
    selector: 'my-novel-detail',
    template: `
<div *ngIf="novel">
    <h2>Let us read about {{novel.name}}!  </h2>
<div>
    <label>name:</label>
<input [(ngModel)]="novel.name" placeholder="name">
    </div>
    </div>`

})
export class NovelDetailComponent {
    @Input()
    novel:Novel;
}
