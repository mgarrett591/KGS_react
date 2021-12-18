export class state{
    public Input: string;
    public Output: string;
    public Console: string;
    public WordMap: Map<string, string>;
    constructor(){
        this.Input = "";
        this.Output = "";
        this.Console = "";
        this.WordMap = new Map<string, string>();
    }

    public SetInput(NewInput: string){
        let Copy: state = this.Copy();
        Copy.Input = NewInput;
        return Copy;
    }

    public Copy(){
        let Copy: state = new state();
        Copy.Input = this.Input;
        Copy.Output = this.Output;
        Copy.Console = this.Console;
        return Copy;
    }

    public Log(Message: string){
        this.Console = this.Console + Message + "\n";
    }

    public Clear(){
        this.Console = "";
    }

    public VariableLookup(key: string){
        if(this.WordMap.has(key)){
            return this.WordMap.get(key);
        }
        else if(state.InQuotes(key)){
            return state.RemoveQuotes(key);
        }
        return undefined;
    }

    private static InQuotes(key: string){
        return key.length >= 2 && key.charAt(0) === '"' && key.charAt(key.length - 1) === '"';
    }

    private static RemoveQuotes(key: string){
        if(key.length < 3){
            return "";
        }
        return key.substring(1, key.length - 1);
    }
}