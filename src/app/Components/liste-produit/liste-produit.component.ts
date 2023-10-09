import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/Services/produit.service';
import { Produit } from 'src/models/Produit.models';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit{

  title !:'Produit';
  titre :string = 'Produit';
  listProduit : Produit[] = []; 

  produitForm: FormGroup; // Créez le formulaire FormGroup
  produitData: any;
  searchValue: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number = 1;


  constructor(private produitService: ProduitService, private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.produitForm = this.formBuilder.group({
      nom_produit: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      quantite_produit: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.fetchAllProduit();
  }

  fetchAllProduit():void{
    this.produitService.listProduit().subscribe({
      next:(response)=>{
        console.log(response);
        this.listProduit = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddProduit():void{
    console.log('Méthode onAddProduit appelée');

    if (this.produitForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.produitForm.valid);
      const produitData = this.produitForm.value;
      this.produitService.addProduit(produitData).subscribe(produit =>
        this.listProduit.push(produit)),
        this.produitForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }

  onDeleteProduit(id:number):void{
    console.log(id);
    this.produitService.deleteProduit(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.fetchAllProduit();
      },
      error(err){
        console.log('erreur de suppression' , err)
      },
    })
  }

  onUpdateProduit(id:number , produit:Produit):void{
    this.produitService.updateProduit(id , produit).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error(err){
        console.log("erreur de mise à jours" , err);
      }
    })
  }


  onDeleteProduitConfirmation(id: number): void {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir la supprimer ?");
    if (confirmation) {
      this.onDeleteProduit(id);
    }
  }

  get filteredProduits(): Produit[] {
    return this.listProduit.filter(produit => {
      return (
        produit.id.toString().includes(this.searchValue) ||
        produit.nom_produit.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        produit.prix.toString().includes(this.searchValue) ||
        produit.quantite_produit.toString().includes(this.searchValue)
      );
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getPageNumbers(): number[] {
    const totalItems = this.listProduit.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  getPagedProduits(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProduits.slice(startIndex, endIndex);
  }

  
}

