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
var Novel = (function () {
    function Novel() {
    }
    return Novel;
}());
exports.Novel = Novel;
var NOVELS = [
    { type: 'Scientific', 'name': 'Deception Point' },
    { type: 'Thriller', 'name': 'Girl with the dragon tattoo' },
    { type: 'thriller', 'name': 'if tomorrow comes' },
    { type: 'fiction', 'name': 'Inferno' },
    { type: 'fiction', 'name': 'Twilight' },
    { type: 'fiction', 'name': 'Thousand Splendid suns' }
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
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/listing/list.html',
            styleUrls: ['app/listing/list.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map