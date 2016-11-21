import { Injectable } from '@angular/core';
import { Novel } from './novel';
import { NOVELS } from './mock-novels';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class NovelService {

    getNovels(): Promise<Novel[]> {
        return Promise.resolve(NOVELS);
    }


    // getNovels(): Novel[] {
    //     return NOVELS;
    // }


    getNovelsSlowly(): Promise<Novel[]> {
        return new Promise<Novel[]>(resolve =>
            setTimeout(resolve, 10000)) // delay 2 seconds
            .then(() => this.getNovels());
    }


    getNovel(name: string): Promise<Novel> {
        return this.getNovels()
            .then(novels => novels.find(novel => novel.name === name));
    }

}
