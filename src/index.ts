import {GithubApiService} from "./GithubApiService"
import { User } from "./User";
import { Repo } from "./Repo";
import * as _ from "lodash"

let service = new GithubApiService();

if(process.argv.length<3){
    console.log('Please pass username as an argument');
}
else{
let userName = process.argv[2];
service.getUserInfo(userName, (user : User) => {
    service.getRepos(userName, (repos : Repo[]) => {
        let sortedRepos = _.sortBy(repos, [(repo : Repo) => repo.forkCount*-1]); // Multiplying with -1 to sort in discending order
        let filteredRepos = _.take(sortedRepos, 5);
        user.repos = filteredRepos;
        console.log(user.repos);
    });
});

}