import {Component, Input} from '@angular/core';
import {Novel} from './novel';
@Component({
    selector: 'my-novel-detail',
    templateUrl: 'app/details/index.html',
    styleUrls: ['app/details/index.css']
})
export class NovelDetailComponent {
    @Input()
    novel:Novel;
}
