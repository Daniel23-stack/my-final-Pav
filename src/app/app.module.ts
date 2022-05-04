import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { MessageComponent } from './message/message.component';
import { RebrandComponent } from './rebrand/rebrand.component';
import { LastComponent } from './last/last.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    QuestionsComponent,
    MessageComponent,
    RebrandComponent,
    LastComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot()

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
