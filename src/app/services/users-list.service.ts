import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  private readonly searchedUsers = new BehaviorSubject<Array<any>>([]);

  constructor() { }

  public addUser(newUser:any){
    if(!newUser){
      return
    }

    const currentUsers = this.searchedUsers.getValue();

    if(!currentUsers.find(user => user.login === newUser.login)){
      const users = [...currentUsers, newUser];
      this.searchedUsers.next(users);
    }
  }

  public getSearchedUsers(): Observable<Array<any>>{
    return this.searchedUsers.asObservable();
  }

  public deleteUser(userLogin: string) {
    if(!userLogin){
      return
    }

    const currentUsers = this.searchedUsers.getValue();
    const users = currentUsers.filter(user => user.login !== userLogin);
    this.searchedUsers.next(users);
  }
}
