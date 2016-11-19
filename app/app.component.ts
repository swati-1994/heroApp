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
    templateUrl: 'app/listing/list.html',
    styleUrls: ['app/listing/list.css']
})
export class AppComponent {
    novels = NOVELS;
    title = 'Novels';
    novel:Novel = {
        type: 'Fiction',
        name: 'Emma'
    };
    selectedNovel:Novel;
}