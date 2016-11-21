/**
 * Created by swati on 21/11/16.
 */
import { Component } from '@angular/core';
import { Novel } from './novel';
import { NovelService } from './novel.service';
import { OnInit } from '@angular/core';


@Component({

    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    template:` <h3>My Dashboard</h3>
 <h3>Top Novels</h3>
<div class="grid grid-pad">
  <div *ngFor="let novel of novels" class="col-1-4">
    <div class="module novel">
      <h4>{{novel.name}}</h4>
    </div>
  </div>
</div>

 
 `
})

export class DashboardComponent implements OnInit {

    novels: Novel[] = [];

    constructor(private novelService: NovelService) { }

    ngOnInit(): void {
        this.novelService.getNovels()
            .then(heroes => this.novels= heroes.slice(1, 3));
    }
}
