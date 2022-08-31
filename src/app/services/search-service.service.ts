import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private readonly http: HttpClient) { }

  gitApi: string = 'https://api.github.com/users/';

  public getUser(user: string): Observable<any>{
    return this.http.get(this.gitApi+user);
  }
}
