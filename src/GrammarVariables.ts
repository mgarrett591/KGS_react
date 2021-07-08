import { Syntax } from "./Syntax";
export class GrammarVariables{
    private Names: string[];
    private Values: string[];
    private Templet: string;
    constructor(){
        this.Names = [];
        this.Values = [];
        this.Templet = "";
    }
    
    public Lookup(Name: string){
        let index: number = this.Names.indexOf(Name.toLowerCase());
        if(index < 0 || this.Values.length < index){
            return "";
        }
        return this.Values[index];
    }

    public SetValue(Name: string, Value: string){
        let index: number = this.Names.indexOf(Name);
        if(!(index < 0 || this.Values.length < index)){
            this.Values[index] = Value;
        }
    }

    public SetTemplet(Templet: string){
        if(Templet === this.Templet || !Syntax.CheckSyntax(Templet)){
            return;
        }
        this.Templet = Templet;
        let NewNames: string[] = this.GetNewNamesFromTemplet(Templet)
        let NewValues: string[] = [];
        for(let i: number = 0; i < NewNames.length; i++){
            NewValues.push(this.Lookup(NewNames[i]))
        }
    }

    public PrintRows(){
        return "";
    }

    private GetNewNamesFromTemplet(Templet: string){
        let NewNames: string[] = [];
        Templet = Templet.replace("}","{");
        let Work:string[] = Templet.split('{');
        for (let i: number = 1; i < Work.length; i += 2){
            let NewName: string = Work[i].split(".")[0].toLowerCase();
            if(NewName != "unit"){
                NewNames.push(NewName);
            }
        }
        return NewNames;
    }
}