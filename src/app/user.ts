export class User {
    constructor(public email:string, public username:string, public password:string, public profile_pic:any, public isAuthenticated:boolean,public authToken:string){
        isAuthenticated = false;
    }
}
