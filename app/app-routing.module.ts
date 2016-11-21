/**
 * Created by swati on 21/11/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { NovelsComponent }      from './novels.component';
import { NovelDetailComponent }  from './novel-detail.component';
import {Novel} from "./novel";
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: NovelDetailComponent },
    { path: 'novels',     component: NovelsComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
