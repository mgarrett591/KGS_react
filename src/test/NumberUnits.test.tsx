import { Grammer } from "../Grammer";
import { KGSi } from "../KGSi";

test('Native 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.native}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("하나");
});

test('Sino 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.sino}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("일");
});

test('Item 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.item} {.item}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 개");
});

test('Animal 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.animal} {.animal}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 마리");
});

test('Cup 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.cup} {.cup}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 잔");
});

test('Bottle 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.bottle} {.bottle}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 병");
});

test('Slice 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.slice} {.slice}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 조각");
});

test('Book 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.book} {.book}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 권");
});

test('Car 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.car} {.car}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 대");
});

test('Action 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.action} {.action}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 번");
});

test('Order', () => {
    let gram = new Grammer();
    gram.Templet = '{var.order}{.order}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("첫번째");
});

test('Clothing', () => {
    let gram = new Grammer();
    gram.Templet = '{var.clothing} {.clothing}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 벌");
});

test('People', () => {
    let gram = new Grammer();
    gram.Templet = '{var.people} {.people}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 명");
});

test('Bigwig', () => {
    let gram = new Grammer();
    gram.Templet = '{var.bigwig} {.bigwig}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 분");
});

test('Serving', () => {
    let gram = new Grammer();
    gram.Templet = '{var.serving} {.serving}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한 인분");
});

test('Second 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.second}{.second}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("일초");
});

test('Minute 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.minute}{.minute}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("일분");
});

test('Hour 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.hour}{.hour}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("한시");
});

test('Day 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.day}{.day}';
    gram.WordMap.set("var", "1");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("일일");
});

test('Month 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.month}{.month}';
    gram.WordMap.set("var", "6");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("유월");
});

test('Year 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.year}{.year}';
    gram.WordMap.set("var", "2017");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("이천십칠년");
});

test('Age 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.age} {.age}';
    gram.WordMap.set("var", "23");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("스물세 살");
});

test('Dollar 1', () => {
    let gram = new Grammer();
    gram.Templet = '{var.$} {.$}';
    gram.WordMap.set("var", "200");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("이백 달러");
});

test('Won 5000 ', () => {
    let gram = new Grammer();
    gram.Templet = '{var.₩} {.₩}';
    gram.WordMap.set("var", "5000");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("오천 원");
});

test('Won 5000 korea with backslash', () => {
    let gram = new Grammer();
    gram.Templet = '{var.\\} {.\\}';
    gram.WordMap.set("var", "5000");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("오천 원");
});
