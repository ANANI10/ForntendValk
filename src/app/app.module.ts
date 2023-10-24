import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitComponent } from './Components/liste-produit/liste-produit.component';
import { AddProduitComponent } from './Components/add-produit/add-produit.component';
import { UpdateProduitComponent } from './Components/update-produit/update-produit.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddEmployeComponent } from './Components/add-employe/add-employe.component';
import { ListeEmployeComponent } from './Components/liste-employe/liste-employe.component';
import { UpdateEmployeComponent } from './Components/update-employe/update-employe.component';
import { AddLivraisonComponent } from './Components/add-livraison/add-livraison.component';
import { ListeLivraisonComponent } from './Components/liste-livraison/liste-livraison.component';
import { UpdateLivraisonComponent } from './Components/update-livraison/update-livraison.component';
import { AddVenteComponent } from './Components/add-vente/add-vente.component';
import { ListeVenteComponent } from './Components/liste-vente/liste-vente.component';
import { UpdateVenteComponent } from './Components/update-vente/update-vente.component';
import { AddPayementComponent } from './Components/add-payement/add-payement.component';
import { ListePayementComponent } from './Components/liste-payement/liste-payement.component';
import { UpdatePayementComponent } from './Components/update-payement/update-payement.component';
import { AddContratComponent } from './Components/add-contrat/add-contrat.component';
import { ListeContratComponent } from './Components/liste-contrat/liste-contrat.component';
import { UpdateContratComponent } from './Components/update-contrat/update-contrat.component';
import { AddDemandeComponent } from './Components/add-demande/add-demande.component';
import { ListeDemandeComponent } from './Components/liste-demande/liste-demande.component';
import { UpdateDemandeComponent } from './Components/update-demande/update-demande.component';
import { AddCongeComponent } from './Components/add-conge/add-conge.component';
import { ListeCongeComponent } from './Components/liste-conge/liste-conge.component';
import { UpdateCongeComponent } from './Components/update-conge/update-conge.component';
import { AddAbsenceComponent } from './Components/add-absence/add-absence.component';
import { ListeAbsenceComponent } from './Components/liste-absence/liste-absence.component';
import { UpdateAbsenceComponent } from './Components/update-absence/update-absence.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RevenueComponent } from './Components/revenue/revenue.component';
import { NbreEmployeComponent } from './Components/nbre-employe/nbre-employe.component';
import { NbreVenteComponent } from './Components/nbre-vente/nbre-vente.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './Components/chart/chart.component';
import { TypeCongeComponent } from './Components/type-conge/type-conge.component';
import { LoginComponent } from './Components/login/login.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { NotAuthorizeComponent } from './Components/not-authorize/not-authorize.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';



@NgModule({
  declarations: [
    AppComponent,
    ListeProduitComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    AddEmployeComponent,
    ListeEmployeComponent,
    UpdateEmployeComponent,
    AddLivraisonComponent,
    ListeLivraisonComponent,
    UpdateLivraisonComponent,
    AddVenteComponent,
    ListeVenteComponent,
    UpdateVenteComponent,
    AddPayementComponent,
    ListePayementComponent,
    UpdatePayementComponent,
    AddContratComponent,
    ListeContratComponent,
    UpdateContratComponent,
    AddDemandeComponent,
    ListeDemandeComponent,
    UpdateDemandeComponent,
    AddCongeComponent,
    ListeCongeComponent,
    UpdateCongeComponent,
    AddAbsenceComponent,
    ListeAbsenceComponent,
    UpdateAbsenceComponent,
    DashboardComponent,
    RevenueComponent,
    NbreEmployeComponent,
    NbreVenteComponent,
    ChartComponent,
    TypeCongeComponent,
    LoginComponent,
    NotAuthorizeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
    
    

  ],
  providers: [
    { provide : HTTP_INTERCEPTORS , useClass : AppHttpInterceptor , multi:true },
    AuthenticationGuard, AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
