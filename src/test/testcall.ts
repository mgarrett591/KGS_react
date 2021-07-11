import { KGSi } from "../KGSi";
export class TestCall{
    public static Call(Templet: string, Var: string){
        let WordMap: Map<string, string> = new Map<string, string>();
        WordMap.set("var", Var);
        return KGSi.Interpolator(Templet, WordMap);
    };
};