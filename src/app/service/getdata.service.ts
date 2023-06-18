import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http:HttpClient) { 
    
  }

  getData(limit:number,page:number){
  //  return this.http.get('http://localhost:8080/'); 
  return this.http.get(`//marble-zinc-snowplow.glitch.me/get-data?limit=${limit}&page=${page}`);
  }
}
