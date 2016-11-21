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
var core_1 = require('@angular/core');
var novel_1 = require('./novel');
require('rxjs/add/operator/switchMap');
var novel_service_1 = require('./novel.service');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var NovelDetailComponent = (function () {
    function NovelDetailComponent(novelService, route, location) {
        this.novelService = novelService;
        this.route = route;
        this.location = location;
    }
    NovelDetailComponent.prototype.save = function () {
        var _this = this;
        this.novelService.update(this.novel)
            .then(function () { return _this.goBack(); });
    };
    NovelDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.novelService.getNovel(+params['id']); })
            .subscribe(function (novel) { return _this.novel = novel; });
    };
    NovelDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', novel_1.Novel)
    ], NovelDetailComponent.prototype, "novel", void 0);
    NovelDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-novel-detail',
            template: "\n    <div *ngIf=\"novel\">\n        <h2>Let us read about {{novel.name}}!  </h2>\n        <div>\n            <label>name:</label>\n            <input [(ngModel)]=\"novel.name\" placeholder=\"name\">\n        </div>    \n         <button (click)=\"goBack()\">Back</button>\n    </div>\n    <button (click)=\"save()\">Save</button>\n   "
        }), 
        __metadata('design:paramtypes', [novel_service_1.NovelService, router_1.ActivatedRoute, common_1.Location])
    ], NovelDetailComponent);
    return NovelDetailComponent;
}());
exports.NovelDetailComponent = NovelDetailComponent;
//# sourceMappingURL=novel-detail.component.js.map