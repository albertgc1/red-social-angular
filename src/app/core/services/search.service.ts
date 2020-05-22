import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url: string

  constructor( private http: HttpClient ) {
    this.url = environment.Url
  }

  newPeople(){
    return this.http.get(`${this.url}/search/people`)
  }

  search(query){
    return this.http.get(`${this.url}/search/people/${query}`)
  }
}
