import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {NoteService} from 'src/app/service/note/note.service';
//import { MatDialogModule } from "@angular/material";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   CommonModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  
  
    MatFormFieldModule,
    MatInputModule,  
    BrowserAnimationsModule,
    //RouterModule.forRoot()
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
