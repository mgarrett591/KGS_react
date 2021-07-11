export class Num_lib{
    private static readonly NativeOnes = [ "", "하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉" ];
    private static readonly NativeTens = [ "", "열", "스물", "서른", "마흔", "쉰", "예순", "일흔", "여든", "아흔" ];

    private static readonly NativeCounterOnes = [ "", "한", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉" ];

    private static readonly SunoOnes = [ "","일","이", "삼", "사", "오", "육", "칠", "팔", "구" ];
    private static readonly NoIll = [ "", "", "이", "삼", "사", "오", "육", "칠", "팔", "구" ];

    public static Native(Number: string){
        let value: number = parseInt(Number);
        if(!isNaN(value) && value > 0 && value < 100)
        {
            return Num_lib.NativeTens[Math.floor(value / 10)] + Num_lib.NativeOnes[value % 10];
        }
        
        return Num_lib.Sino(Number);
    }

    public static Order(Number: string){
        if (Number === "1")
        {
            return "첫";
        }

        return Num_lib.NativeCounter(Number);
    }

    public static Month(Number: string){
        switch(Number){
            case "6":
                return "유";
            case "10":
                return "시";
            default:
                return Num_lib.Sino(Number);
        }
    }
    
    public static NativeCounter(Number: string){
        if(Number === "20")
        {
            return "스무";
        }

        let value: number = parseInt(Number);
        if (!isNaN(value) && value > 0 && value < 100)
        {
            return Num_lib.NativeTens[Math.floor(value / 10)] + Num_lib.NativeCounterOnes[value % 10];
        }

        return Num_lib.Sino(Number);
    }

    private static MyReplaceAll(Source:string, Find: string, Replace: string){
        while(Source.indexOf(Find) !== -1){
            Source = Source.replace(Find, Replace);
        }
        return Source;
    }

    public static Digits(Number: string){
        let value: string = Number;   
        value = Num_lib.MyReplaceAll(value, '0', '공');
        value = Num_lib.MyReplaceAll(value, '1', '일');
        value = Num_lib.MyReplaceAll(value, '2', '이');
        value = Num_lib.MyReplaceAll(value, '3', '삼');
        value = Num_lib.MyReplaceAll(value, '4', '사');
        value = Num_lib.MyReplaceAll(value, '5', '오');
        value = Num_lib.MyReplaceAll(value, '6', '육');
        value = Num_lib.MyReplaceAll(value, '7', '칠');
        value = Num_lib.MyReplaceAll(value, '8', '팔');
        value = Num_lib.MyReplaceAll(value, '9', '구');
        return value;
    }

    public static Sino(Number: string){
        if(Number === "0")
        {
            return "공";
        }

        let value = parseInt(Number);
        if (!isNaN(value) && value <= 1000000000000)
        {
            if (value === 1000000000000) return "일조";
            
            return Num_lib.억(value) + Num_lib.만(value) + Num_lib.천(value) + Num_lib.백(value) + Num_lib.십(value) + Num_lib.일(value);
        }

        return Num_lib.Digits(Number);
    }

    private static 일(Number: number){
        return Num_lib.SunoOnes[Number % 10];
    }

    private static 십(Number: number){
        if(Math.floor((Number % 100) / 10) === 0)
        {
            return "";
        }
        
        return Num_lib.NoIll[Math.floor((Number % 100) / 10)] + "십";
    }

    private static 백(Number: number){
        if (Math.floor((Number % 1000) / 100) === 0)
        {
            return "";
        }

        return Num_lib.NoIll[Math.floor((Number % 1000) / 100)] + "백";
    }

    private static 천(Number: number){
        if (Math.floor((Number % 10000) / 1000) === 0)
        {
            return "";
        }

        return Num_lib.NoIll[Math.floor((Number % 10000) / 1000)] + "천";
    }

    private static 만(Number: number){
        let man: number = Math.floor((Number % 100_000_000) / 10_000);
        if (man === 0)
        {
            return "";
        }

        return Num_lib.천(man) + Num_lib.백(man) + Num_lib.십(man) + Num_lib.NoIll[man % 10] + "만" + ((Number % 10_000 === 0)?"":" ");
    }

    private static 억(Number: number){
        let oek: number = Math.floor((Number % 1_000_000_000_000) / 100_000_000);
        if (oek === 0)
        {
            return "";
        }

        return Num_lib.천(oek) + Num_lib.백(oek) + Num_lib.십(oek) + Num_lib.일(oek) + "억" + ((Number % 100_000_000 === 0) ? "" : " ");
    }
}
