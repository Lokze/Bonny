import { IIncentivo } from "./IIncentivo";

export interface IStartup {
    nome:string;
    settore:string;
    riceviIncentivo(incentivo:IIncentivo):void
}