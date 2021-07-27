import { Grammer } from "../Grammer";
import { KGSi } from "../KGSi";

test('Adjective form of 싸다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.adj}';
    gram.WordMap.set("var", "싸다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("싼");
});

test('Adjective form of 빠르다', () => {
    let gram = new Grammer();
    gram.Templet = '{var.adj}';
    gram.WordMap.set("var", "빠르다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("빠른");
});

test('Adjective form of 같은', () => {
    let gram = new Grammer();
    gram.Templet = '{var.adj}';
    gram.WordMap.set("var", "같다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("같은");
});

test('Adjective form of 조용한', () => {
    let gram = new Grammer();
    gram.Templet = '{var.adj}';
    gram.WordMap.set("var", "조용하다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("조용한");
});

test('Adjective form of 매운', () => {
    let gram = new Grammer();
    gram.Templet = '{var.adj}';
    gram.WordMap.set("var", "맵다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("매운");
});

test('Adjective form of 단', () => {
    let gram = new Grammer();
    gram.Templet = '{var.adj}';
    gram.WordMap.set("var", "달다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("단");
});

test('Adjective form of 재미있는', () => {
    let gram = new Grammer();
    gram.Templet = '{var.adj}';
    gram.WordMap.set("var", "재미있다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("재미있는");
});

test('Adjective form of 맛없는', () => {
    let gram = new Grammer();
    gram.Templet = '{var.adj}';
    gram.WordMap.set("var", "맛없다");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("맛없는");
});
