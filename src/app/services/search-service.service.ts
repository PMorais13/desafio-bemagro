import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }

  gitApi: string = 'https://api.github.com/users/';

  getUser(user:string): Observable<any>{
    return this.http.get(this.gitApi+user);
  }
}
