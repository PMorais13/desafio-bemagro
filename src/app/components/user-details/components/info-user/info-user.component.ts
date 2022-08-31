import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit, OnChanges {

  @Input() diretivaUser: any

  constructor() { }

  ngOnInit() {
    this.hiddenDiv();
  }

  ngOnChanges(changes: any){
    if(changes.diretivaUsers){
      document.getElementById('card')!.style.display="block"
    }
  }


  hiddenDiv() {
    if(this.diretivaUser == undefined){
      document.getElementById('card')!.style.display="none"
    }
  }
}




