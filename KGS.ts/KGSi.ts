import { Utilities } from "./utilities";
export class KGSi{
    
    private static ValidDepth(Depth:number){
        return Depth == 0b10 || Depth == 0b1 || Depth == 0b0;
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

    public static Interpolator(Templet:string, VariableTable: string[]) {
        //Sytax
        if (!this.CheckSyntax(Templet)){
            return "Check your Syntax";
        }

        //Variables
        Templet = Templet.replace("}","{");
        let VariableInterpolationTable:string[] = Templet.split('{');
        for (let i: number = 1; i < VariableInterpolationTable.length; i += 2){
            VariableInterpolationTable[i] = Utilities.EvaluateVariableTableKey(VariableTable, VariableInterpolationTable[i]);
        }
        Templet = VariableInterpolationTable.join("");

        //Particals
        Templet = Templet.replace("]", "[");
        let ParticleInterpolationTable:string[] = Templet.split('[');
        for (let i:number = 1; i < ParticleInterpolationTable.length; i += 2){
            ParticleInterpolationTable[i] = Utilities.EvaluateParticle(ParticleInterpolationTable[i-1], ParticleInterpolationTable[i]);
            ParticleInterpolationTable[i - 1] = "";
        }
        Templet = ParticleInterpolationTable.join("");        

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