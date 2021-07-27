import { Grammer } from "../Grammer";
import { KGSi } from "../KGSi";

test('FCS form of 켜다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "켜다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("켜어");
});

test('FCS form of 하다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "하다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("해");
});

test('FCS form of 하다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "노래하다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("노래해");
});

test('FCS form of 작다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "작다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("작아");
});

test('FCS form of 싸다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "싸다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("싸");
});

test('FCS form of 오다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "오다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("와");
});

test('FCS form of ', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "믿다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("믿어");
});

test('FCS form of 마시다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "마시다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("마셔");
});

test('FCS form of 필요없다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "필요없다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("필요없어");
});

test('FCS form of 끝내다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "끝내다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("끝내");
});

test('FCS form of 높다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "높다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("높아");
});

test('FCS form of 주다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "주다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("줘");
});

test('FCS form of 떠들다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "떠들다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("떠들어");
});

test('FCS form of 나쁘다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "나쁘다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("나빠");
});

test('FCS form of 잠그다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "잠그다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("잠가");
});

test('FCS form of 사귀다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "사귀다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("사귀어");
});

test('FCS when passed a nonverb', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("{var.fcs}");
});

test('FCS form of 다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.fcs}';
    gram.WordMap.set("var", "다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("{var.fcs}");
});
