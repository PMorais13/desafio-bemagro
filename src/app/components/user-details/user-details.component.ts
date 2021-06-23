import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators'
import { GeocodingService } from 'src/app/services/geocoding.service';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public user: any;
  public coordinates: any;

  constructor(private activatedRoute: ActivatedRoute,
    private usersListService: UsersListService,
    private geocodingService: GeocodingService) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(take(1)).subscribe(params => {
      this.getUserDetails(params['userlogin']);
    });
  }

  private getUserDetails(userLogin: string) {
    this.usersListService.getSearchedUsers().subscribe(users => {
      this.user = users.find(user => user.login === userLogin);
      if(this.user){
        this.searchCoordinates(this.user.location);
      }
    })
  }

  public removerAcentosEspaco(str: string) {

    str = str.replace(/^\s+|\s+$/g, ''); // remover espaco do comeco e do fim
    str = str.toLowerCase();
    // remover acentuacao
    var from = "ãàáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remover caracteres inválidos
      .replace(/\s+/g, '+') // Remover espaços
      .replace(/-+/g, ''); //Remover traços
    return str;
  }

  public searchCoordinates(location: string) {
    if(!location){
      return
    }
    location = this.removerAcentosEspaco(location);
    this.geocodingService.getCoordinates(location).subscribe(coordinates => {
      this.coordinates = coordinates;
    });
  }
}

