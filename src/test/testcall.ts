import { KGSi } from "../KGSi";
export class TestCall{
    public static Call(Templet: string, Var: string){
        return KGSi.Interpolator(Templet, [Var])
    };
};