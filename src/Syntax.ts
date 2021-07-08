export class Syntax{
    public static ValidDepth(Depth:number){
        return Depth == 0b10 || Depth == 0b1 || Depth == 0b0;
    };

    public static DeltaDepth(Letter:string){
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

    public static CheckSyntax(Templet:string) {
        let Depth: number = 0;
        for(let LetterIndex: number = 0; LetterIndex < Templet.length; LetterIndex++){
            Depth += this.DeltaDepth(Templet.charAt(LetterIndex));
            if(!this.ValidDepth(Depth)){
                return false;
            }
        }
        return true;
    };
}