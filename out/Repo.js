"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(responseBody) {
        this.name = responseBody.name;
        this.description = responseBody.description;
        this.url = responseBody.html_url;
        this.size = responseBody.size;
        this.forkCount = responseBody.forks_count;
    }
    return Repo;
}());
exports.Repo = Repo;
