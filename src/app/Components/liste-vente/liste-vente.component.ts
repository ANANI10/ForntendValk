import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProduitService } from 'src/app/Services/produit.service';
import { VenteService } from 'src/app/Services/vente.service';
import { Produit } from 'src/models/Produit.models';
import { Vente } from 'src/models/Vente.models';

@Component({
  selector: 'app-liste-vente',
  templateUrl: './liste-vente.component.html',
  styleUrls: ['./liste-vente.component.css']
})
export class ListeVenteComponent implements OnInit{
  
  title !:'Vente';
  titre :string = 'Vente';
  listVente : Vente[] = []; 
  produits !: Produit[];
  venteForm: FormGroup; // Créez le formulaire FormGroup
  venteData: any;
  searchValue: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number = 1;
  produit !: Observable<Produit>

  constructor(private venteService: VenteService, private produitService:ProduitService ,  private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.venteForm = this.formBuilder.group({
      date_vente: ['', [Validators.required]],
      quantite_vendue: ['', [Validators.required]],
      prix: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.fetchAllVente();
    this.produitService.listProduit().subscribe(data => {
      this.produits = data;
    });
  }

  fetchAllVente():void{
    this.venteService.listVente().subscribe({
      next:(response)=>{
        console.log(response);
        this.listVente = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddVente():void{
    console.log('Méthode onAddVente appelée');

    if (this.venteForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.venteForm.valid);
      const produitData = this.venteForm.value;
      this.venteService.addVente(produitData).subscribe(vente =>
        this.listVente.push(vente)),
        this.venteForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }

  onDeleteVente(id:number):void{
    console.log(id);
    this.venteService.deleteVente(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.fetchAllVente();
      },
      error(err){
        console.log('erreur de suppression' , err)
      },
    })
  }

  onUpdateVente(id:number , vente:Vente):void{
    this.venteService.updateVente(id , vente).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error(err){
        console.log("erreur de mise à jours" , err);
      }
    })
  }


  onDeleteVenteConfirmation(id: number): void {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir la supprimer ?");
    if (confirmation) {
      this.onDeleteVente(id);
    }
  }


  get filteredVente(): Vente[] {
    return this.listVente.filter(vente => {
      return (
        vente.id.toString().includes(this.searchValue) ||
        vente.date_vente.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        vente.quantite_vendue.toString().includes(this.searchValue) ||
        vente.prix.toString().includes(this.searchValue)
      );
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getPageNumbers(): number[] {
    const totalItems = this.listVente.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  getPagedVente(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredVente.slice(startIndex, endIndex);
  }


  getProduitDetails(produitId: number): void {
    this.produitService.findProduit(produitId).subscribe({
      next:(response)=>{
        console.log(response);
        
        return response ? response.nom_produit  : 'Produit introuvable';
      },
    }
      
    )
  }


}
