//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseURL:String;

  constructor(public http: Http) {
    this.baseURL = "https://api.themoviedb.org/3/";
    console.log('Hello MovieProvider Provider');

  }

  private getAPIKey():string  {
    return "cd3cf1610c3a51ffd331f804fef7aaa6";
  }


  public getLatestMovie() {
    return this.http.get(this.baseURL + "movie/latest" + this.getAPIKey());
  }

}
