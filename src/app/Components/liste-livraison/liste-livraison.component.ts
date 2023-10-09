import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LivraisonService } from 'src/app/Services/livraison.service';
import { Livraison } from 'src/models/Livraison.models';
import { FormControlName } from '@angular/forms';
import { Employe } from 'src/models/Employe.models';
import { EmployeService } from 'src/app/Services/employe.service';


@Component({
  selector: 'app-liste-livraison',
  templateUrl: './liste-livraison.component.html',
  styleUrls: ['./liste-livraison.component.css']
})
export class ListeLivraisonComponent {

  title !:'Livraison';
  titre :string = 'Livaison';
  listLivraison : Livraison[] = []; 
  livraisonForm: FormGroup; // Créez le formulaire FormGroup
  livraisonData: any;

  employes: Employe[] = [];

  constructor(private livraisonService: LivraisonService,  private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.livraisonForm = this.formBuilder.group({
      date_livraison: ['', [Validators.required]],
      status: ['', [Validators.required]],
      lieu: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.fetchAllLivraison();
  }

  fetchAllLivraison():void{
    this.livraisonService.listLivraison().subscribe({
      next:(response)=>{
        console.log(response);
        this.listLivraison = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }



  onAddLivraison():void{
    console.log('Méthode onAddLivraison appelée');

    if (this.livraisonForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.livraisonForm.valid);
      const livraisonData = this.livraisonForm.value;
      this.livraisonService.addLivraison(livraisonData).subscribe(livraison =>
        this.listLivraison.push(livraison)),
        this.livraisonForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }

  onDeleteLivraison(id:number):void{
    console.log(id);
    this.livraisonService.deleteLivraison(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.fetchAllLivraison();
      },
      error(err){
        console.log('erreur de suppression' , err)
      },
    })
  }

  onUpdateVente(id:number , livraison:Livraison):void{
    this.livraisonService.updateLivraison(id , livraison).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error(err){
        console.log("erreur de mise à jours" , err);
      }
    })
  }


  onDeleteLivraisonConfirmation(id: number): void {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir la supprimer ?");
    if (confirmation) {
      this.onDeleteLivraison(id);
    }
  }


   
}
 

