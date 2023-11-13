import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitComponent } from './Components/liste-produit/liste-produit.component';
import { AddProduitComponent } from './Components/add-produit/add-produit.component';
import { AddEmployeComponent } from './Components/add-employe/add-employe.component';
import { ListeEmployeComponent } from './Components/liste-employe/liste-employe.component';
import { AddVenteComponent } from './Components/add-vente/add-vente.component';
import { ListeVenteComponent } from './Components/liste-vente/liste-vente.component';
import { AddPayementComponent } from './Components/add-payement/add-payement.component';
import { ListePayementComponent } from './Components/liste-payement/liste-payement.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RevenueComponent } from './Components/revenue/revenue.component';
import { ChartComponent } from './Components/chart/chart.component';
import { ListeLivraisonComponent } from './Components/liste-livraison/liste-livraison.component';
import { UpdateLivraisonComponent } from './Components/update-livraison/update-livraison.component';
import { AddLivraisonComponent } from './Components/add-livraison/add-livraison.component';
import { UpdateVenteComponent } from './Components/update-vente/update-vente.component';
import { UpdateProduitComponent } from './Components/update-produit/update-produit.component';
import { UpdateEmployeComponent } from './Components/update-employe/update-employe.component';
import { TypeCongeComponent } from './Components/type-conge/type-conge.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NotAuthorizeComponent } from './Components/not-authorize/not-authorize.component';
import { NbreEmployeComponent } from './Components/nbre-employe/nbre-employe.component';
import { NbreVenteComponent } from './Components/nbre-vente/nbre-vente.component';
import { UpdatePayementComponent } from './Components/update-payement/update-payement.component';

const routes: Routes = [

  {path:'dashboard' , component:DashboardComponent, canActivate: [AuthenticationGuard], children :[
    {path:'addEmp' , component: AddEmployeComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'listEmp' , component: ListeEmployeComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'updateEmp' , component: UpdateEmployeComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'addProd', component :AddProduitComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'listeProd' , component:ListeProduitComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'updateProd' , component:UpdateProduitComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'addVente' , component: AddVenteComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'listVente' , component: ListeVenteComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'updateVente' , component: UpdateVenteComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'addPayement' , component: AddPayementComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'updatePayement' , component:UpdatePayementComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"} },
    {path:'payementlist' , component:ListePayementComponent, canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'daily-revenue-by-date?date=${date}' , component:ChartComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'Addlivraison' , component:AddLivraisonComponent ,canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'Listlivraison' , component:ListeLivraisonComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'Updatelivraison' , component:UpdateLivraisonComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'nombreTotalEmployes' , component:NbreEmployeComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'nombreTotalVente' , component:NbreVenteComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'calculerSommeRevenuTotal' , component:RevenueComponent , canActivate: [AuthorizationGuard], data : { role : "ADMIN"}},
    {path:'notAuthorized' , component:NotAuthorizeComponent},
    
  ]},
    {path:'typeconge' , component:TypeCongeComponent },

    //{path: '', redirectTo: 'login', pathMatch: 'full'},
    {path:'login' , component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
