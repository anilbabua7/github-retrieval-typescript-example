export class Repo{
    name : string;
    description : string;
    url : string;
    size : number;
    forkCount : number;
    constructor(responseBody : any){
        this.name = responseBody.name;
        this.description = responseBody.description;
        this.url = responseBody.html_url;
        this.size = responseBody.size;
        this.forkCount = responseBody.forks_count;
    }
}