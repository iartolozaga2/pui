import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailreaderComponent } from './emailreader/emailreader.component';
import { EmaillistComponent } from './emaillist/emaillist.component';
import { EmailformComponent } from './emailform/emailform.component';
import { EmailviewerComponent } from './emailviewer/emailviewer.component';

const routes: Routes = [
 { path: 'emailreader', component: EmailreaderComponent },
 { path: 'emaillist', component: EmaillistComponent },
 { path: 'emailform', component: EmailformComponent },
 { path: 'emailviewer/:value', component: EmailviewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

EmailreaderComponent