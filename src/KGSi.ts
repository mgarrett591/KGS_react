import { Grammer } from "./Grammer";

export class KGSi{
    
    private static ValidDepth(Depth:number){
        return Depth === 0b100 || Depth === 0b1 || Depth === 0b0;
    };

    private static DeltaDepth(Letter:string){
        switch(Letter){
            case '{':
                return 0b1;
            case '}':
                return -0b1;
            case '[':
                return 0b100;
            case ']':
                return -0b100;
            default:
                return 0b0;
        }
    };

    private static CheckSyntax(Templet:string) {
        let Depth: number = 0;
        for(let LetterIndex: number = 0; LetterIndex < Templet.length; LetterIndex++){
            Depth += this.DeltaDepth(Templet.charAt(LetterIndex));
            if(!this.ValidDepth(Depth)){
                return false;
            }
        }
        return Depth === 0;
    };

    private static MyReplaceAll(Source:string, Find: string, Replace: string){
        while(Source.indexOf(Find) !== -1){
            Source = Source.replace(Find, Replace);
        }
        return Source;
    }

    public static Interpolator(gram: Grammer) {
        //Sytax
        if (!this.CheckSyntax(gram.Templet)){
            gram.EvalString = "";
            gram.Messages.push("Check your Syntax!");
            return gram.Copy(); //We return a copy so React will update the gui
        }

        //Variables
        let Templet = KGSi.MyReplaceAll(gram.Templet,"}","{");
        let VariableInterpolationTable:string[] = Templet.split('{');
        for (let i: number = 1; i < VariableInterpolationTable.length; i += 2){
            VariableInterpolationTable[i] = gram.EvaluateVariableTableKey(VariableInterpolationTable[i]);
        }
        Templet = VariableInterpolationTable.join("");

        //Particals
        Templet = KGSi.MyReplaceAll(Templet,"]", "[");
        let ParticleTable:string[] = Templet.split('[');
        for (let i:number = 1; i < ParticleTable.length; i += 2){
            ParticleTable[i] = gram.EvaluateParticle(ParticleTable[i-1], ParticleTable[i]);
            ParticleTable[i - 1] = "";
        }
        gram.EvalString = ParticleTable.join("");        

        return gram.Copy(); //We return a copy so React will update the gui
    };

};