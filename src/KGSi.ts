import { GrammerLogic } from "./core";
export class KGSi{
    
    private static ValidDepth(Depth:number){
        return Depth === 0b10 || Depth === 0b1 || Depth === 0b0;
    };

    private static DeltaDepth(Letter:string){
        switch(Letter){
            case '{':
                return 0b1;
            case '}':
                return -0b1;
            case '[':
                return 0b10;
            case ']':
                return -0b10;
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
        return true;
    };

    private static MyReplaceAll(Source:string, Find: string, Replace: string){
        while(Source.indexOf(Find) !== -1){
            Source = Source.replace(Find, Replace);
        }
        return Source;
    }

    public static Interpolator(Templet:string, GrammarVars: Map<string, string>) {
        //Sytax
        if (!this.CheckSyntax(Templet)){
            return "Check your Syntax";
        }

        //Variables
        Templet = KGSi.MyReplaceAll(Templet,"}","{");
        let VariableInterpolationTable:string[] = Templet.split('{');
        for (let i: number = 1; i < VariableInterpolationTable.length; i += 2){
            VariableInterpolationTable[i] = GrammerLogic.EvaluateVariableTableKey(GrammarVars, VariableInterpolationTable[i]);
        }
        Templet = VariableInterpolationTable.join("");

        //Particals
        Templet = KGSi.MyReplaceAll(Templet,"]", "[");
        let ParticleTable:string[] = Templet.split('[');
        for (let i:number = 1; i < ParticleTable.length; i += 2){
            ParticleTable[i] = GrammerLogic.EvaluateParticle(ParticleTable[i-1], ParticleTable[i]);
            ParticleTable[i - 1] = "";
        }
        Templet = ParticleTable.join("");        

        return Templet;
    };

    //TODO
    public static RenameInTemplet(Templet: string){
        return "";
    }

    //TODO
    public static RenameInVarTable(VariableTable: string[]){
        return "";
    }

    //TODO
    public static GetVarTable(Templet: string){
        return [];
    };

    //TODO
    public static ToStandardForm(Templet: string){
        return "";
    };

    //TODO
    public static ToTemplet(Text: string){
        return "";
    }

    //TODO
    public static Eq(TempletA: string, TempletB: string){
        return this.ToStandardForm(TempletA) === this.ToStandardForm(TempletB);
    }



};