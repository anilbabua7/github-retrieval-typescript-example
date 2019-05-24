"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var service = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log('Please pass username as an argument');
}
else {
    var userName_1 = process.argv[2];
    service.getUserInfo(userName_1, function (user) {
        service.getRepos(userName_1, function (repos) {
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount * -1; }]); // Multiplying with -1 to sort in discending order
            var filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user.repos);
        });
    });
}
