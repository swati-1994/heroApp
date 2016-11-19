import { Component, Input } from '@angular/core';
import { Novel } from './novel';
@Component({
    selector: 'my-novel-detail',
    template: `
<div *ngIf="selectedNovel">
    <h2>Let us read about {{selectedNovel.name}}!  </h2>
<div>
    <label>name:</label>
<input [(ngModel)]="selectedNovel.name" placeholder="name">
    </div>
    </div>`


})
export class NovelDetailComponent {
    @Input()
    novel: Novel;
}
