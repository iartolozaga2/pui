import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailreaderComponent } from './emailreader/emailreader.component';
import { EmaillistComponent } from './emaillist/emaillist.component';
import { EmailformComponent } from './emailform/emailform.component';
import { EmailviewerComponent } from './emailviewer/emailviewer.component';
import { EmailfilterPipe } from './pipes/emailfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmailreaderComponent,
    EmaillistComponent,
    EmailformComponent,
    EmailviewerComponent,
    EmailfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
