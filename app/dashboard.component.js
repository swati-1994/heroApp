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
 * Created by swati on 21/11/16.
 */
var core_1 = require('@angular/core');
var novel_service_1 = require('./novel.service');
var DashboardComponent = (function () {
    function DashboardComponent(novelService) {
        this.novelService = novelService;
        this.novels = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.novelService.getNovels()
            .then(function (heroes) { return _this.novels = heroes.slice(1, 3); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            template: " <h3>My Dashboard</h3>\n <h3>Top Novels</h3>\n<div class=\"grid grid-pad\">\n  <div *ngFor=\"let novel of novels\" class=\"col-1-4\">\n    <div class=\"module novel\">\n      <h4>{{novel.name}}</h4>\n    </div>\n  </div>\n</div>\n\n \n "
        }), 
        __metadata('design:paramtypes', [novel_service_1.NovelService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map