export class Alias{
    private static readonly AliasMap = new Map([
        ["this","이번"],
        ["last","지난"],
        ["next","다음"],
        ["item","개"],
        ["animal","마리"],
        ["cup","잔"],
        ["bottle","병"],
        ["slice","조각"],
        ["book","권"],
        ["car","대"],
        ["action","번"],
        ["order","번째"],
        ["clothing","벌"],
        ["people","명"],
        ["bigwig","분"],
        ["serving","인분"],
        ["second","초"],
        ["minute","분"],
        ["hour","시"],
        ["day","일"],
        ["month","월"],
        ["year","년"],
        ["age","살"],
        ["$","달러"],
        ["₩","원"],
        ["\\","원"],
        ["fee","비"],
        ["charge","료"]
    ]);

    public static Lookup(Key: string){
        return this.AliasMap.has(Key)? String(this.AliasMap.get(Key)):"{."+ Key + "}";
    }

}
