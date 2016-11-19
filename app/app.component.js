"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by swati on 18/11/16.
 */
var core_1 = require('@angular/core');
var NOVELS = [
    { type: 'Scientific', name: 'Deception Point' },
    { type: 'Thriller', name: 'Girl with the dragon tattoo' },
    { type: 'thriller', name: 'if tomorrow comes' },
    { type: 'fiction', name: 'Inferno' },
    { type: 'fiction', name: 'Twilight' },
    { type: 'fiction', name: 'Thousand Splendid suns' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.novels = NOVELS;
        this.title = 'Novels';
        this.novel = {
            type: 'Fiction',
            name: 'Emma'
        };
    }
    AppComponent.prototype.onSelect = function (novel) {
        this.selectedNovel = novel;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n<h2>My favourite reads:</h2>\n <ul class=\"style\">\n \n <li *ngFor=\"let novel of novels\" (click)=\"onSelect(novel)\"  [class.selected]=\"novel === selectedNovel\">\n \n \n \n  <span class=\"badge\">{{novel.type}}</span> {{novel.name}}\n</li>\n \n \n \n <!--<li *ngFor=\"let novel of novels  (click)= \"onSelect(novel)\">-->\n   <!--<span class=\"badge\">{{novel.type}}</span> {{novel.name}}>-->\n<!--</li> -->\n </ul>\n <my-novel-detail [novel]=\"selectedNovel\"></my-novel-detail>\n\n \n    ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .style {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .style li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .style li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .style li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .style .text {\n    position: relative;\n    top: -3px;\n  }\n  .style .badge{\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map