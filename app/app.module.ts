import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NovelsComponent }  from './novels.component';
import { NovelDetailComponent } from './novel-detail.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        NovelsComponent,
        NovelDetailComponent
    ],
    bootstrap: [ NovelsComponent ]
})
export class AppModule { }
