import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email';
import { ViewChild } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-emailreader',
  templateUrl: './emailreader.component.html',
  styleUrls: ['./emailreader.component.css']
})
export class EmailreaderComponent implements OnInit {

  constructor(private myEmailServ: EmailService) { }

  ngOnInit(): void {
  }

}
