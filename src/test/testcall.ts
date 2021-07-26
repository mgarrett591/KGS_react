import { KGSi } from "../KGSi";
export class TestCall{
    //Single Verb Test
    public static Var(Templet: string, Var: string){
        let WordMap: Map<string, string> = new Map<string, string>();
        WordMap.set("var", Var);
        return KGSi.Interpolator(Templet, WordMap);
    };
    //Topic Object Verb
    public static TOV(Templet: string, Topic: string, Object: string, Verb: string){
        let WordMap: Map<string, string> = new Map<string, string>();
        WordMap.set("topic", Topic);
        WordMap.set("object", Object);
        WordMap.set("verb", Verb);
        return KGSi.Interpolator(Templet, WordMap);
    };
};