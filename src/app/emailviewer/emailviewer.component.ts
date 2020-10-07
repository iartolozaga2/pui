import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-emailviewer',
  templateUrl: './emailviewer.component.html',
  styleUrls: ['./emailviewer.component.css']
})
export class EmailviewerComponent implements OnInit {

  idvalue: number;
  display: Array<Email>;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private myEmailServ: EmailService) { }

  ngOnInit(): void {
  	this.idvalue = Number(this.route.snapshot.paramMap.get('paramvalue'));
  	/*No sé cómo actualizar el paramvalue sin refrescar todo, así que si
  	quieres ver más de un email seguido en el EmailViewer, hay que resetear todo :( */
  	this.display = this.myEmailServ.getEmailList().filter(email => email.id != this.idvalue);
  }
}
