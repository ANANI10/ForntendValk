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

const routes: Routes = [

  {path:'dashboard' , component:DashboardComponent , children :[
    {path:'addEmp' , component: AddEmployeComponent},
    {path:'listEmp' , component: ListeEmployeComponent},
    {path:'updateEmp' , component: UpdateEmployeComponent},
    {path:'addProd', component :AddProduitComponent},
    {path:'listeProd' , component:ListeProduitComponent},
    {path:'updateProd' , component:UpdateProduitComponent},
    {path:'addVente' , component: AddVenteComponent},
    {path:'listVente' , component: ListeVenteComponent},
    {path:'updateVente' , component: UpdateVenteComponent},
    {path:'addPayement' , component: AddPayementComponent},
    {path:'payementlist' , component:ListePayementComponent},
    {path:'chart' , component:ChartComponent},
    {path:'Addlivraison' , component:AddLivraisonComponent},
    {path:'Listlivraison' , component:ListeLivraisonComponent},
    {path:'Updatelivraison' , component:UpdateLivraisonComponent},
    
  ]},
    {path:'typeconge' , component:TypeCongeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
