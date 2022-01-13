import { state } from "./state";
import { Hand } from './Hand';
import { Particals } from './Particals';
import { db } from './db';

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
    
    public static Interpolator(State: state) {
        State.Clear();
        State.Output = State.Input;

        //
        //Sytax
        if (!this.CheckSyntax(State.Input)){
            State.Output = "";
            State.Log("Check your Syntax!");
            return State.Copy(); //We return a copy so React will update the gui
        }


        //Variables
        let Templet = State.Input.replaceAll("}","{");
        let Variables:string[] = Templet.split('{');
        for (let i: number = 1; i < Variables.length; i += 2){
            let value: string | undefined = State.VariableLookup(Variables[i]);
            if(value !== undefined){
                Variables[i] = value;
                continue;
            }
            let tokens: string[] = Variables[i].split('.');
            if(tokens.length === 2){
                value = Hand.Wave(State.VariableLookup(tokens[0]), tokens[1]);
                if(value !== undefined){
                    Variables[i] = value;
                    continue;
                }
            }
            State.Log("Unable to evaluate " + Variables[i]);
        }
        Templet = Variables.join("");

        //Particals
        Templet = Templet.replaceAll("]", "[");
        let ParticleTable:string[] = Templet.split('[');
        for (let i:number = 1; i < ParticleTable.length; i += 2){
            ParticleTable[i] = Particals.EvaluateParticle(ParticleTable[i-1], ParticleTable[i]);
            ParticleTable[i - 1] = "";
        }
        State.Output = ParticleTable.join("");
        State.Output = db.AjaxExample();
        // 

        return State.Copy(); //We return a copy so React will update the gui        
    };
}