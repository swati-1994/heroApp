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
var mock_novels_1 = require('./mock-novels');
var novel_service_1 = require('./novel.service');
var novels = [];
// const NOVELS:Novel[] = [
//     {type: 'Scientific', name: 'Deception Point'},
//     {type: 'Thriller', name: 'Girl with the dragon tattoo'},
//     {type: 'thriller', name: 'if tomorrow comes'},
//     {type: 'fiction', name: 'Inferno'},
//     {type: 'fiction', name: 'Twilight'},
//     {type: 'fiction', name: 'Thousand Splendid suns'}
// ];
var NovelsComponent = (function () {
    function NovelsComponent(router, novelService) {
        this.router = router;
        this.novelService = novelService;
        this.novels = mock_novels_1.NOVELS;
        this.title = 'Novels';
        this.novel = {
            type: 'Fiction',
            name: 'Emma'
        };
    }
    NovelsComponent.prototype.ngOnInit = function () {
        this.getNovels();
    };
    NovelsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedNovel.name]);
    };
    NovelsComponent.prototype.getNovels = function () {
        var _this = this;
        this.novelService.getNovels().then(function (novels) { return _this.novels = novels; });
    };
    NovelsComponent.prototype.getNovelsSlowly = function () {
        var _this = this;
        this.novelService.getNovelsSlowly().then(function (novels) { return _this.novels = novels; });
    };
    NovelsComponent.prototype.onSelect = function (novel) {
        this.selectedNovel = novel;
    };
    NovelsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedNovel.name]);
    };
    NovelsComponent = __decorate([
        core_1.Component({
            selector: 'my-novels',
            templateUrl: 'novels.component.html',
            styleUrls: ['novels.component.css'],
        }), 
        __metadata('design:paramtypes', [Object, novel_service_1.NovelService])
    ], NovelsComponent);
    return NovelsComponent;
}());
exports.NovelsComponent = NovelsComponent;
//# sourceMappingURL=novels.component.js.map