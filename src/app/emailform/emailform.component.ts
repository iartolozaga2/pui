import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email';
import { ViewChild } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrls: ['./emailform.component.css']
})
export class EmailformComponent implements OnInit {

  email: Email;
  idnumber: number;
  emailList: Email[];
  @ViewChild('emailForm') emailForm: any;

  constructor(private myEmailServ: EmailService) { }

  ngOnInit(): void {
  	this.emailList = [];
  	this.email = { id: null, from: "", to: "", subject: "", body: "" };
  }

  sendForm(): void {
    this.storeEmail();
  }

  clear(): void {
    this.emailForm.reset();
  }

  storeEmail(): void {
    let lastid = this.myEmailServ.getEmailList()[(this.myEmailServ.getEmailList().length-1)].id;
    let newemail = this.email as Email;
    newemail.id = lastid + 1;
    newemail.from = this.email.from;
    newemail.to = this.email.to;
    newemail.subject = this.email.subject;
    newemail.body = this.email.body;
    this.myEmailServ.addToList(newemail); 
    this.idnumber++;
  }

  getEmailList(): Array<Email> { 
    return this.myEmailServ.getEmailList();
  }

  getEmailById(id: number): Email {
    this.myEmailServ.getEmailList().forEach(function(email){
      if (id == email.id) {
        return email;
      }
    });
    return null;
  }

}
