import { Injectable } from '@angular/core';
import { Novel } from './novel';
import { NOVELS } from './mock-novels';



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
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getNovels());
    }

}
