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
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/switchMap');
var http_1 = require('@angular/http');
var NovelService = (function () {
    function NovelService(http) {
        this.http = http;
        this.novelsUrl = 'app/novels';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    NovelService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    NovelService.prototype.update = function (novel) {
        var url = this.novelsUrl + "/" + novel.id;
        return this.http
            .put(url, JSON.stringify(novel), { headers: this.headers })
            .toPromise()
            .then(function () { return novel; })
            .catch(this.handleError);
    };
    NovelService.prototype.create = function (name) {
        return this.http
            .post(this.novelsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    NovelService.prototype.getNovels = function () {
        return this.http.get(this.novelsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    NovelService.prototype.getNovelsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 10000);
        }) // delay 2 seconds
            .then(function () { return _this.getNovels(); });
    };
    NovelService.prototype.getNovel = function (id) {
        return this.getNovels()
            .then(function (novels) { return novels.find(function (novel) { return novel.id === id; }); });
    };
    NovelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NovelService);
    return NovelService;
}());
exports.NovelService = NovelService;
//# sourceMappingURL=novel.service.js.map