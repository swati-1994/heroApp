import {Injectable} from '@angular/core';
import {Novel} from '../novel';
import {NOVELS} from '../mockdata/mock-novel';
@Injectable()
export class NovelService {
    getNovels():Novel[] {
        return NOVELS;
    };
}