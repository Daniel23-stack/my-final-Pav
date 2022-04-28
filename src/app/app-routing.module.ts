import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LastComponent } from './last/last.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { MessageComponent} from './message/message.component';
import { RebrandComponent } from './rebrand/rebrand.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Login',
    component:LoginComponent
  },
  {
    path: 'Questions',
    component:QuestionsComponent
  },
  {
    path: 'Message',
    component:MessageComponent
  },
  {
    path: 'Rebrand',
    component:RebrandComponent
  },
  {
    path: 'Last',
    component:LastComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
