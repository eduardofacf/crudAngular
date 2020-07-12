import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  local = 'http://localhost/crudangular'
  constructor(private http:HttpClient) { }

  Api(dados:any, api:string){

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/jason'})
    };
      const url = this.local + api;
      return this.http.post(url, JSON.stringify(dados), httpOptions).map(res => res)
    }

  }
