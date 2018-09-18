import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos={
    name: 'wajihov',
    lasname: 'BOUFAIED',
    email: 'wajihov@hotmail.fr'
  }

  constructor() { }

  ngOnInit() {
  }

}
