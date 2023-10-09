import { Demande } from "./Demande.models";

export interface Absence extends Demande{
    justification : String;
}