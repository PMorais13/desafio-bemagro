import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { InfoUserComponent } from "./components/info-user/info-user.component";
import { MapComponent } from "./components/map/map.component";
import { UserDetailsRoutingModule } from "./user-details-routing.module";
import { UserDetailsComponent } from "./user-details.component";


@NgModule({
  declarations: [
    UserDetailsComponent,
    MapComponent,
    InfoUserComponent

  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
  ],

  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
})

export class UserDetailsModule { }
