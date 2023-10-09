import { Demande } from "./Demande.models";

export interface Conge extends Demande{
    justification : String;
}