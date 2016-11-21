/**
 * Created by swati on 21/11/16.
 */
import {Component} from '@angular/core';
import {Novel} from './novel';
import {NovelService} from './novel.service';
import {OnInit} from '@angular/core';


@Component({

    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',

 
 
})

export class DashboardComponent implements OnInit {

    novels:Novel[] = [];

    constructor(private novelService:NovelService) {
    }

    ngOnInit():void {
        this.novelService.getNovels()
            .then(novels => this.novels = novels.slice(1,4));
    }
}
