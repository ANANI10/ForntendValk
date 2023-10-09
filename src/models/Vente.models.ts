import { Produit } from "./Produit.models";

export interface Vente{
    id:number;
    date_vente:String;
    quantite_vendue:number;
    prix:number;
    date:Date;
    produitId: number;
}