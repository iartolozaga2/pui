import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailreaderComponent } from './emailreader/emailreader.component';

const routes: Routes = [
 { path: '', redirectTo: '/emailreader', pathMatch: 'full' },
 { path: 'emailreader', component: EmailreaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

EmailreaderComponent