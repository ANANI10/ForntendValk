import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PayementService } from 'src/app/Services/payement.service';
import { Payement } from 'src/models/Payement.models';

@Component({
  selector: 'app-liste-payement',
  templateUrl: './liste-payement.component.html',
  styleUrls: ['./liste-payement.component.css']
})
export class ListePayementComponent implements OnInit{

  title !:'Payement';
  titre :string = 'Payement';
  listPayement : Payement[] = [];
  searchValue: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number = 1;

  payementForm: FormGroup; // Créez le formulaire FormGroup
  payementData: any;

  constructor(private payementService: PayementService, private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.payementForm = this.formBuilder.group({
      salaire: ['', [Validators.required]],
      date_payement: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.fetchAllPayement();
  }

  fetchAllPayement():void{
    this.payementService.listPayement().subscribe({
      next:(response)=>{
        console.log(response);
        this.listPayement = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddPayement():void{
    console.log('Méthode onAddPayement appelée');

    if (this.payementForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.payementForm.valid);
      const payementData = this.payementForm.value;
      this.payementService.addPayement(payementData).subscribe(vente =>
        this.listPayement.push(vente)),
        this.payementForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }

  onDeletePayement(id:number):void{
    console.log(id);
    this.payementService.deletePayement(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.fetchAllPayement();
      },
      error(err){
        console.log('erreur de suppression' , err)
      },
    })
  }

  onUpdatePayement(id:number , payement: Payement):void{
    this.payementService.updatePayement(id , payement).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error(err){
        console.log("erreur de mise à jours" , err);
      }
    })
  }


  onDeletePayementConfirmation(id: number): void {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir la supprimer ?");
    if (confirmation) {
      this.onDeletePayement(id);
    }
  }


  get filteredPayement(): Payement[] {
    return this.listPayement.filter(payement => {
      return (
        payement.id.toString().includes(this.searchValue) ||
        payement.salaire.toString().includes(this.searchValue) ||
        payement.date_payement.toString().includes(this.searchValue) ||
        payement.status.toString().includes(this.searchValue)
      );
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getPageNumbers(): number[] {
    const totalItems = this.listPayement.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  getPagedPayement(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredPayement.slice(startIndex, endIndex);
  }



}
