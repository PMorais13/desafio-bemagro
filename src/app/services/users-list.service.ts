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

  /**
   * metodo responsávle por criar a lista de usuários procurados
   * @returns lista de usuários procurados
   */
  public getSearchedUsers(): Observable<Array<any>>{
    return this.searchedUsers.asObservable();
  }

  /**
   * deleta o usuário selecionado
   */
  public deleteUser(userLogin: string): void {
    if(!userLogin){
      return
    }

    const currentUsers = this.searchedUsers.getValue();
    const users = currentUsers.filter(user => user.login !== userLogin);
    this.searchedUsers.next(users);
  }
}
