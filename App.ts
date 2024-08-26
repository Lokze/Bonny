interface IIncentivo{
    id:number;
    descrizione:string;
    vaoloreIncentivo:number;
    criteriEleggibilita:string;
    assegnaAStartup(startup:IStartup):void;
}

interface IStartup {
    nome:string;
    settore:string;
    riceviIncentivo(incentivo:IIncentivo):void;
}

interface ICittadino{
    nome:string;
    cognome:string;
    eta:number;
    interessiSportivi:string;
    partecipaAttivita(startup:IStartup):void;
}

class Startup implements IStartup{
    nome:string;
    settore:string;
    constructor(nome:string,settore:string){
        this.nome=nome;
        this.settore=settore;
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        console.log(`Ricivuto incentivo con id: ${incentivo.id}, dal valore di: ${incentivo.vaoloreIncentivo}€, secondo questi criteri di eleggibilità: ${incentivo.criteriEleggibilita}, ${incentivo.descrizione}`)
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
        console.log(`${this.nome} ${this.cognome} partecipa all'ativita sportiva della startup ${startup.nome}`);
    }
}


let startup1 = new Startup("runners","sportivo");
let incentivo1 = new Incentivo(1,"descrizione",100000,"criterio1,criterio2" );
let cittadino1 = new Cittadino("Piero","Franchini",30,"corsa");

let startup2 = new Startup("kickers","sportivo");
let incentivo2 = new Incentivo(2,"descrizione2",5000000,"criterio1,criterio2,criterio3" );
let cittadino2 = new Cittadino("Paolo","Zedda",2,"calcio");

startup1.riceviIncentivo(incentivo1);
incentivo1.assegnaAStartup(startup1);
cittadino1.partecipaAttivita(startup1);

startup2.riceviIncentivo(incentivo2);
incentivo2.assegnaAStartup(startup2);
cittadino2.partecipaAttivita(startup2);