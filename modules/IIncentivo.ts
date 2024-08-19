import { IStartup } from "./IStartup";

export interface IIncentivo{
    id:number;
    descrizione:string;
    vaoloreIncentivo:number;
    criteriEleggibilita:string;
    assegnaAStartup(startup:IStartup):void;
}