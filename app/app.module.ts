import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {NovelsComponent}  from './novels.component';
import {NovelDetailComponent} from './novel-detail.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import {RouterModule}   from '@angular/router';
import {AppComponent} from "./app.component";
import { NovelService } from './novel.service';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule }    from '@angular/http';


import {DashboardComponent} from "./dashboard.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        

        AppRoutingModule
        // RouterModule.forRoot([
        //     {
        //         path: 'novels',
        //         component: NovelsComponent
        //     },
        //     {
        //         path: 'dashboard',
        //         component: DashboardComponent
        //     },
        //     {
        //         path: '',
        //         redirectTo: '/dashboard',
        //         pathMatch: 'full'
        //     },
        //     {
        //         path: 'detail/:id',
        //         component: NovelDetailComponent
        //     },
        // ])

    ],
    declarations: [
        NovelsComponent,
        DashboardComponent,
        NovelDetailComponent,
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [NovelService]
})


export class AppModule {
}
