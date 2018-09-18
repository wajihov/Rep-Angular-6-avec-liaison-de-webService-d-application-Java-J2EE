import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import  "rxjs/add/operator/map";
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageContacts: any;

  constructor(public http: Http ) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/findPersons?mc=wa&page=1&size=6")
      .map(resp => resp.json())
      .subscribe( data => {
        this.pageContacts= data;
      }, errr =>{
        console.log("ErroR : "+errr);
      });
  }

}
