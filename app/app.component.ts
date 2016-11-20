/**
 * Created by swati on 18/11/16.
 */
import {Component} from '@angular/core';
import {Novel} from './novel';
import {NovelService} from './services/novel.services'
@Component({
    selector: 'my-app',
    templateUrl: 'app/listing/list.html',
    stylesUrls: ['app/listing/list.css'] // must be an array //
})


export class AppComponent {
    novels:Novel[];
    title = 'Novels';
    novel:Novel = {
        type: 'Fiction',
        name: 'Emma'
    };
    selectedNovel:Novel;

    onSelect(novel:Novel):void {
        this.selectedNovel = novel;
    }
}