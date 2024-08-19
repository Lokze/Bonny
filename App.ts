import { ICittadino } from "./modules/ICittadino";
import { IIncentivo } from "./modules/IIncentivo";
import { IStartup } from "./modules/IStartup";

class Startup implements IStartup{
    nome:string;
    settore:string;
    constructor(nome:string,settore:string){
        this.nome=nome;
        this.settore=settore;
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        console.log(`Ricivuto incentivo con id: ${incentivo.id}, dal valore di: ${incentivo.vaoloreIncentivo}, secondo questi criteri di eleggibilità: ${incentivo.criteriEleggibilita}, ${incentivo.descrizione}`)
    }
}

class Incentivo implements IIncentivo{
    id:number;
    descrizione:string;
    vaoloreIncentivo:number;
    criteriEleggibilita:string;

    constructor(id:number,descrizone:string,valoreIncentivo:number,criteriEleggibilita:string){
        this.id=id;
        this.descrizione=descrizone;
        this.vaoloreIncentivo=valoreIncentivo;
        this.criteriEleggibilita=criteriEleggibilita;
    }


    assegnaAStartup(startup:IStartup):void{
        console.log(`È stato assegnato un incentivo alla startup ${startup.nome} nel settore ${startup.settore}`)
    }
}

class Cittadino implements ICittadino{

    nome:string;
    cognome:string;
    eta:number;
    interessiSportivi:string;

    constructor(nome:string,cognome:string,eta:number,interessiSportivi:string){
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta;
        this.interessiSportivi=interessiSportivi;
    }


    partecipaAttivita(startup:IStartup):void{
        console.log(`${this.nome} ${this.cognome} fa ora parte della startup`)
    }
}
