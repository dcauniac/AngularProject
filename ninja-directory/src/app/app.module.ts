import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES_PROVIDER),
    AppRoutingModule,
    FormsModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
