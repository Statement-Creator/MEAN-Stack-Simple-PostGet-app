import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsComponent } from './forms/forms.component';

import { DataService } from './data.service';

const routes = [
  {path:'', component : HomepageComponent},
  {path:'form', component :FormsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
