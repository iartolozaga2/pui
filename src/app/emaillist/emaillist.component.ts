import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email';
import { ViewChild } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-emaillist',
  templateUrl: './emaillist.component.html',
  styleUrls: ['./emaillist.component.css']
})
export class EmaillistComponent implements OnInit {

  emailListLocal: Array<Email>;

  constructor(private myEmailServ: EmailService) {}

  ngOnInit(): void {
  	this.emailListLocal = this.myEmailServ.getEmailList();
  }

  delete(email: Email): void {
  	/*List will be updated the next time you access the list.*/
  	this.myEmailServ.removeFromList(email.id);
  	window.alert("List will be updated the next time you access it.")
  }
}
