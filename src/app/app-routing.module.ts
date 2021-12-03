
import { RubriquesComponent } from './components/rubriques/rubriques.component';

import { SignindonnateurComponent } from './forms/signindonnateur/signindonnateur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninassociationComponent } from './forms/signinassociation/signinassociation.component';
import { LoginComponent } from './forms/login/login.component';
import { RubriquedetailsComponent } from './components/rubriquedetails/rubriquedetails.component';
import { AddrubriqueComponent } from './forms/addrubrique/addrubrique.component';
import { ListrubriquesComponent } from './components/listrubriques/listrubriques.component';
import { FormaddComponent } from './forms/formadd/formadd.component';


const routes: Routes = [
  {path: 'signindonateur', component: SignindonnateurComponent},
  {path: 'test', component: SigninassociationComponent},
  {path: '', component: LoginComponent},
  {path: 'test', component: RubriquesComponent},
  {path: 'test', component: RubriquedetailsComponent},
  {path: 'test', component: AddrubriqueComponent},
  {path: 'test', component: ListrubriquesComponent},
  {path: 'formadd', component: FormaddComponent},
  {path: 'test', component: FormaddComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]



})
export class AppRoutingModule { }
