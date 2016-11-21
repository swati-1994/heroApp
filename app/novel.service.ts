import {Injectable} from '@angular/core';
import {Novel} from './novel';
import 'rxjs/add/operator/toPromise';
import {ActivatedRoute, Params}   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';





@Injectable()
export class NovelService {




    private novelsUrl = 'app/novels';
    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    private headers = new Headers({'Content-Type': 'application/json'});

    update(novel: Novel): Promise<Novel> {
        const url = `${this.novelsUrl}/${novel.id}`;
        return this.http
            .put(url, JSON.stringify(novel), {headers: this.headers})
            .toPromise()
            .then(() => novel)
            .catch(this.handleError);
    }



    create(name: string): Promise<Novel> {
        return this.http
            .post(this.novelsUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.novelsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getNovels():Promise<Novel[]> {


        return this.http.get(this.novelsUrl)
            .toPromise()
            .then(response => response.json().data as Novel[])
            .catch(this.handleError);


    }

    getNovelsSlowly():Promise<Novel[]> {
        return new Promise<Novel[]>(resolve =>
            setTimeout(resolve, 10000)) // delay 2 seconds
            .then(() => this.getNovels());
    }


    getNovel(id:number):Promise<Novel> {
        return this.getNovels()
            .then(novels => novels.find(novel=>novel.id === id));
    }

}
