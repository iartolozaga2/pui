import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private EmailList: Array<Email>;

  constructor() { 
      this.EmailList = [
        {id: 0,from: "iartolozaga2@gmail.com",to: "hola@ejemplo.com",subject: "Buenos dias",body: "Como estas?"},
        {id: 1,from: "hola@ejemplo.com",to: "iartolozaga2@gmail.com",subject: "No me hables",body: "Por favor."},
        {id: 2,from: "iartolozaga2@gmail.com",to: "hola@ejemplo.com",subject: "Buenas noches",body: "Que descanses!"},
        {id: 3,from: "hola@ejemplo.com",to: "iartolozaga2@gmail.com",subject: "Basta ya",body: "No te aguanto."}
      ]; 
   }

  addToList(email: Email): void {
    this.EmailList.push(email);
  }

  removeFromList(emailId: number) {
    this.setEmailList(this.getEmailList().filter(email => email.id !== emailId));
  }

  getEmailList(): Array<Email> {
    return this.EmailList;
  }

  getEmailById(id: number): Email {
    /* Pongo el [0] al final para sacar el unico elemento de una array de un elemento (si todo se ha hecho bien)*/
    return this.EmailList.filter(email => email.id == id)[0];
  }

  setEmailList(newList: Array<Email>): void {
    this.EmailList = newList;
  }

  clean(): void {
    this.EmailList = []; 
  }
}