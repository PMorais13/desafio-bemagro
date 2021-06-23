import { Component, OnInit } from '@angular/core';
import { UsersListService } from './../../../../../services/users-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Array<any> = new Array();

  constructor(private userListService: UsersListService) { }

  ngOnInit(): void {
    this.userList();
  }

  userList() {
    this.userListService.getSearchedUsers().subscribe( users =>
      this.users = users)
  }

  public deleteUser(userLogin: string) {
    this.userListService.deleteUser(userLogin);
  }
}
