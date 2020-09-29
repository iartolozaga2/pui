import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-emailreader',
  templateUrl: './emailreader.component.html',
  styleUrls: ['./emailreader.component.css']
})
export class EmailreaderComponent implements OnInit {

  email: Email;
  emailList: Email[];
  @ViewChild('emailForm') emailForm: any;

  constructor() { }

  ngOnInit(): void {
    this.emailList = [];
  	this.email = { from: "", to: "", subject: "", body: "" };
  }

  sendForm(): void {
    this.storeEmail();
    var inbox: HTMLElement = document.getElementById('inbox') as HTMLElement;
    inbox.innerHTML += this.printEmail();
  }

  clear(): void {
    this.emailForm.reset();
  }

  storeEmail(): void {
    let newemail = this.email as Email;
    newemail.from = this.email.from;
    newemail.to = this.email.to;
    newemail.subject = this.email.subject;
    newemail.body = this.email.body;
    this.emailList.push(newemail); 
  }

  printEmail(): string {
    return "Received email, from '" + this.emailList[0].from + "', to '" +
      this.emailList[0].to + "', with subject '" + this.emailList[0].subject
      + "' and body '" + this.emailList[0].body + "'.<br>";
  }
}
