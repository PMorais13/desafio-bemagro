import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SearchServiceService } from './../../../services/search-service.service';
import { UsersListService } from './../../../services/users-list.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})

export class SearchUserComponent implements OnInit {

  public userGroup!: FormGroup;
  public users: any;

  constructor(private searchService: SearchServiceService,
    private readonly fb: FormBuilder,
    private readonly userListService: UsersListService) { }

  get f() {
    return this.userGroup.controls;
  }

  ngOnInit() {
    this.userGroup = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
    });
  }

  public searchApi(userName: string) {
    if (this.userGroup.valid) {
      this.searchService.getUser(userName).pipe(first()).subscribe(user => {
        this.users = user;
        console.log(user)
        this.userListService.addUser(user);
      }, err => {
        alert('Usuário não cadastrado, erro '+err.status);
      })
    }
  }

  public reset(): void {
    this.userGroup.reset();
  }


}
