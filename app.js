var Startup = /** @class */ (function () {
    function Startup(nome, settore) {
        this.nome = nome;
        this.settore = settore;
    }
    Startup.prototype.riceviIncentivo = function (incentivo) {
        console.log("Ricivuto incentivo con id: ".concat(incentivo.id, ", dal valore di: ").concat(incentivo.vaoloreIncentivo, "\u20AC, secondo questi criteri di eleggibilit\u00E0: ").concat(incentivo.criteriEleggibilita, ", ").concat(incentivo.descrizione));
    };
    return Startup;
}());
var Incentivo = /** @class */ (function () {
    function Incentivo(id, descrizone, valoreIncentivo, criteriEleggibilita) {
        this.id = id;
        this.descrizione = descrizone;
        this.vaoloreIncentivo = valoreIncentivo;
        this.criteriEleggibilita = criteriEleggibilita;
    }
    Incentivo.prototype.assegnaAStartup = function (startup) {
        console.log("\u00C8 stato assegnato un incentivo alla startup ".concat(startup.nome, " nel settore ").concat(startup.settore));
    };
    return Incentivo;
}());
var Cittadino = /** @class */ (function () {
    function Cittadino(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    Cittadino.prototype.partecipaAttivita = function (startup) {
        console.log("".concat(this.nome, " ").concat(this.cognome, " partecipa all'ativita sportiva della startup ").concat(startup.nome));
    };
    return Cittadino;
}());
var startup1 = new Startup("runners", "sportivo");
var incentivo1 = new Incentivo(1, "descrizione", 100000, "criterio1,criterio2");
var cittadino1 = new Cittadino("Piero", "Franchini", 30, "corsa");
var startup2 = new Startup("kickers", "sportivo");
var incentivo2 = new Incentivo(2, "descrizione2", 5000000, "criterio1,criterio2,criterio3");
var cittadino2 = new Cittadino("Paolo", "Zedda", 2, "calcio");
startup1.riceviIncentivo(incentivo1);
incentivo1.assegnaAStartup(startup1);
cittadino1.partecipaAttivita(startup1);
startup2.riceviIncentivo(incentivo2);
incentivo2.assegnaAStartup(startup2);
cittadino2.partecipaAttivita(startup2);
