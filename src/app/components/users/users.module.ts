import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { DemoMaterialModule } from "src/app/shared/material.module";
import { UsersComponent } from "./users.component";
import { UserListComponent } from './search-user/components/user-list/user-list.component';
import { UsersRoutingModule } from "./users-routing.module";
import { SearchUserComponent } from "./search-user/search-user.component";


@NgModule({
  declarations: [
    SearchUserComponent,
    UsersComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ],

  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
})

export class UsersModule { }
