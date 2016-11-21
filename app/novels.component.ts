/**
 * Created by swati on 18/11/16.
 */
import {Component} from '@angular/core';
import { Novel } from './novel';
import { NovelDetailComponent } from './novel-detail.component';

import { NOVELS } from './mock-novels';
import { OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { NovelService } from './novel.service';

const novels: Novel[]=[];

// const NOVELS:Novel[] = [
//     {type: 'Scientific', name: 'Deception Point'},
//     {type: 'Thriller', name: 'Girl with the dragon tattoo'},
//     {type: 'thriller', name: 'if tomorrow comes'},
//     {type: 'fiction', name: 'Inferno'},
//     {type: 'fiction', name: 'Twilight'},
//     {type: 'fiction', name: 'Thousand Splendid suns'}
// ];

@Component({
    selector: 'my-novels',
        templateUrl: 'novels.component.html',
    styleUrls: [ 'novels.component.css' ],




})


export class NovelsComponent implements OnInit {

    ngOnInit(): void {

        this.getNovels();

    }

    constructor(
        private router: Router,

        private novelService: NovelService) { }

    novels = NOVELS;

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedNovel.name]);
    }

    getNovels(): void {
        this.novelService.getNovels().then(novels => this.novels = novels)
    }

    getNovelsSlowly(): void {
        this.novelService.getNovelsSlowly().then(novels => this.novels = novels)
    }

    title = 'Novels';
    novel:Novel = {
        type: 'Fiction',
        name: 'Emma'
    };

    selectedNovel: Novel;

    onSelect(novel: Novel): void {
        this.selectedNovel = novel;
    }

   



}