import {Component, Input,OnInit} from '@angular/core';
import {Novel} from './novel';
import 'rxjs/add/operator/switchMap';
import { NovelService } from './novel.service';



import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';




@Component({


    moduleId: module.id,


    selector: 'my-novel-detail',
    template: `
<div *ngIf="novel">
    <h2>Let us read about {{novel.name}}!  </h2>
<div>
    <label>name:</label>
<input [(ngModel)]="novel.name" placeholder="name">
    </div>
    
     <button (click)="goBack()">Back</button>
    </div>
   `

})
export class NovelDetailComponent implements OnInit{


    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.novelService.getNovels(+params['name']))
            .subscribe(novel => this.novel = novel);
    }


    goBack(): void {
        this.location.back();
    }



    @Input()
    novel:Novel;

    constructor(
        private novelService: NovelService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
}
