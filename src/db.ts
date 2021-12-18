import { VerbOps } from './han_lib';
export class db{
    public static GetFx(FxName: string){
        switch(FxName){
            case "~요":
                return this.Yo();
            case "~ㅆ어요":
                return this.PastYo();
            case "~ㄹ 거예요":
                return this.FutureYo();
            case "~니다":
                return this.Nida();
            case "~니까":
                return this.Nigga();
        }
        
        return undefined;
    }

    public static Yo(){
        let fx = new Fx();
        fx.VerbOp = VerbOps.FCS;
        fx.Postfix = "요";
        return fx;
    }

    public static PastYo(){
        let fx = new Fx();
        fx.VerbOp = VerbOps.PastFCS;
        fx.Postfix = "어요";
        return fx;
    }

    public static FutureYo(){
        let fx = new Fx();
        fx.VerbOp = VerbOps.Hal;
        fx.Postfix = " 거예요";
        return fx;
    }

    public static Nida(){
        let fx = new Fx();
        fx.VerbOp = VerbOps.Hal;
        fx.Postfix = "니다";
        fx.VerbOp = VerbOps.Set_Bieup_as_Batchim_if_the_Batchim_is_blank;
        fx.CheckBatchim = true;
        fx.Batchim = "습";
        return fx;
    }

    public static Nigga(){
        let fx = new Fx();
        fx.VerbOp = VerbOps.Hal;
        fx.Postfix = "니까";
        fx.VerbOp = VerbOps.Set_Bieup_as_Batchim_if_the_Batchim_is_blank;
        fx.CheckBatchim = true;
        fx.Batchim = "습";
        return fx;
    }


}
export class IrregularLists{
    //ㄷ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%84%B7_irregular_verbs
    public static readonly ㄷIrregularList = [ "걷다", "깨닫다", "듣다", "묻다", "싣다"];
    
    //ㅂ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%85%82_irregular_verbs
    public static readonly ㅂIrregularList= [ "뜨겁다", "차갑다", "가볍다", "고맙다", "곱다", "눕다", "굽다", "귀엽다", "깁다", "까다롭다", "더럽다", "덥다", "돕다", "두렵다", "맵다", "무겁다", "밉다", "반갑다", "부럽다", "아름답다", "어둡다", "어렵다", "쉽다", "줍다", "즐겁다", "춥다" ];
    
    //르 irregular verbs -- https://www.koreanwikiproject.com/wiki/%EB%A5%B4_irregular_verbs
    public static readonly 르RegularList = [ "따르다" ];
    
    //ㅅ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%85%85_irregular_verbs
    public static readonly ㅅIrregularList = [];
    
    //으 irregular verbs -- https://www.koreanwikiproject.com/wiki/%EC%9C%BC_irregular_verbs
    public static readonly 으IrregularList = [];
}

export class Fx{
    public VerbOp: VerbOps;  //The method in han_lib we are going to call
    public Batchim: string;  //The string the goes between the verb and the Postfix
    public AntiBatchim: string;
    public Postfix: string;
    public CheckBatchim: Boolean;
    public Name: string;
    constructor(){
        this.VerbOp = VerbOps.Dictionary;
        this.Batchim = "";
        this.AntiBatchim = "";
        this.Postfix = "";
        this.CheckBatchim = false;
        this.Name = "";
    }
}