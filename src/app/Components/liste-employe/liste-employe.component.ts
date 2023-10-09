import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from 'src/app/Services/employe.service';
import { Employe } from 'src/models/Employe.models';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent implements OnInit{

  title !:'Employe';
  titre :string = 'Employe';
  listEmploye : Employe[] = []; 
  searchValue: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number = 1;
  totalLength : any;
  page!: number;

  employeForm: FormGroup; // Créez le formulaire FormGroup
  employeData: any;

  constructor(private employeService: EmployeService, private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.employeForm = this.formBuilder.group({
      
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      date_naissance: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      num_telephone: ['', [Validators.required]],
      salaire: ['', [Validators.required]],
      age: ['', [Validators.required]],
      nationalite: ['', [Validators.required]],
      fonction: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.fetchAllEmploye();
  }

  fetchAllEmploye():void{
    this.employeService.listEmploye().subscribe({
      next:(response)=>{
        console.log(response);
        this.listEmploye = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddEmploye():void{
    console.log('Méthode onAddEmploye appelée');

    if (this.employeForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.employeForm.valid);
      const employeData = this.employeForm.value;
      this.employeService.addEmploye(employeData).subscribe(employe =>
        this.listEmploye.push(employe)),
        this.employeForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }

  onDeleteEmploye(id:number):void{
    console.log(id);
    this.employeService.deleteEmploye(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.fetchAllEmploye();
      },
      error(err){
        console.log('erreur de suppression' , err)
      },
    })
  }

  onUpdateEmploye(id:number , employe:Employe):void{
    this.employeService.updateEmploye(id , employe).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error(err){
        console.log("erreur de mise à jours" , err);
      }
    })
  }


  onDeleteEmployeConfirmation(id: number): void {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir la supprimer ?");
    if (confirmation) {
      this.onDeleteEmploye(id);
    }
  }

  

  fetchEmployePage(page: number): void {
    this.employeService.getEmployePage(page).subscribe({
      next: (data: any) => {
        this.listEmploye = data.results; // Stockez les données paginées
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données :', err);
      },
    });
  }


  get filteredEmployee(): Employe[] {
    return this.listEmploye.filter(employee => {
      return (
        employee.id.toString().includes(this.searchValue) ||
        employee.nom.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        employee.prenom.toString().includes(this.searchValue) ||
        employee.date_naissance.toString().includes(this.searchValue) ||
        employee.adresse.toString().includes(this.searchValue) ||
        employee.num_telephone.toString().includes(this.searchValue) ||
        employee.salaire.toString().includes(this.searchValue) ||
        employee.age.toString().includes(this.searchValue) ||
        employee.nationalite.toString().includes(this.searchValue) ||
        employee.fonction.toString().includes(this.searchValue)
      );
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getPageNumbers(): number[] {
    const totalItems = this.listEmploye.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  getPagedEmployee(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredEmployee.slice(startIndex, endIndex);
  }

  

}
