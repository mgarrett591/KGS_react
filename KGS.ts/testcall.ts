import { KGSi } from "./KGSi";
export class TestCall{
    public Call(Templet: string, Var: string){
        return KGSi.Interpolator(Templet, [Var])
    };
};