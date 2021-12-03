import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninassociationComponent } from './forms/signinassociation/signinassociation.component';
import { SignindonnateurComponent } from './forms/signindonnateur/signindonnateur.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './forms/login/login.component';
import { RubriquesComponent } from './components/rubriques/rubriques.component';
import { RubriquedetailsComponent } from './components/rubriquedetails/rubriquedetails.component';
import { AddrubriqueComponent } from './forms/addrubrique/addrubrique.component';
import { ListrubriquesComponent } from './components/listrubriques/listrubriques.component';
import { FormaddComponent } from './forms/formadd/formadd.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SigninassociationComponent,
    SignindonnateurComponent,
    LoginComponent,
    RubriquesComponent,
    RubriquedetailsComponent,
    AddrubriqueComponent,
    ListrubriquesComponent,
    FormaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
