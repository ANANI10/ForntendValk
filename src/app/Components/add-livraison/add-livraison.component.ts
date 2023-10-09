import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from 'src/app/Services/employe.service';
import { LivraisonService } from 'src/app/Services/livraison.service';
import { Employe } from 'src/models/Employe.models';
import { Livraison } from 'src/models/Livraison.models';
import { FormControlName } from '@angular/forms';


@Component({
  selector: 'app-add-livraison',
  templateUrl: './add-livraison.component.html',
  styleUrls: ['./add-livraison.component.css']
})
export class AddLivraisonComponent implements OnInit{
  
  livraison!: Livraison;
  livraisonForm!: FormGroup;
  listLivraison : any[] = [];
  employes: Employe[] = [];



  constructor(private livraisonService: LivraisonService  , private formBuilder: FormBuilder , private route: ActivatedRoute) {
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
      livraisonData.employe_id = +livraisonData.employe_id;
      this.livraisonService.addLivraison(livraisonData).subscribe(livraison =>
        this.listLivraison.push(livraison)),
        this.livraisonForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }

  


}
