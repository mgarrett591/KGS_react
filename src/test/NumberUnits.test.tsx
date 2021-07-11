import { TestCall } from "./testcall";

test('Native 1', () => {
    let Value: string = TestCall.Call("{var.native}", "1");
    expect(Value).toEqual("하나");
});

test('Sino 1', () => {
    let Value: string = TestCall.Call("{var.sino}", "1");
    expect(Value).toEqual("일");
});

test('Item 1', () => {
    let Value: string = TestCall.Call("{var.item} {unit.item}", "1");
    expect(Value).toEqual("한 개");
});

test('Animal 1', () => {
    let Value: string = TestCall.Call("{var.animal} {unit.animal}", "1");
    expect(Value).toEqual("한 마리");
});

test('Cup 1', () => {
    let Value: string = TestCall.Call("{var.cup} {unit.cup}", "1");
    expect(Value).toEqual("한 잔");
});

test('Bottle 1', () => {
    let Value: string = TestCall.Call("{var.bottle} {unit.bottle}", "1");
    expect(Value).toEqual("한 병");
});

test('Slice 1', () => {
    let Value: string = TestCall.Call("{var.slice} {unit.slice}", "1");
    expect(Value).toEqual("한 조각");
});

test('Book 1', () => {
    let Value: string = TestCall.Call("{var.book} {unit.book}", "1");
    expect(Value).toEqual("한 권");
});

test('Car 1', () => {
    let Value: string = TestCall.Call("{var.car} {unit.car}", "1");
    expect(Value).toEqual("한 대");
});

test('Action 1', () => {
    let Value: string = TestCall.Call("{var.action} {unit.action}", "1");
    expect(Value).toEqual("한 번");
});

test('Order', () => {
    let Value: string = TestCall.Call("{var.order}{unit.order}", "1");
    expect(Value).toEqual("첫번째");
});

test('Clothing', () => {
    let Value: string = TestCall.Call("{var.clothing} {unit.clothing}", "1");
    expect(Value).toEqual("한 벌");
});

test('People', () => {
    let Value: string = TestCall.Call("{var.people} {unit.people}", "1");
    expect(Value).toEqual("한 명");
});

test('Bigwig', () => {
    let Value: string = TestCall.Call("{var.bigwig} {unit.bigwig}", "1");
    expect(Value).toEqual("한 분");
});

test('Serving', () => {
    let Value: string = TestCall.Call("{var.serving} {unit.serving}", "1");
    expect(Value).toEqual("한 인분");
});

test('Second 1', () => {
    let Value: string = TestCall.Call("{var.second}{unit.second}", "1");
    expect(Value).toEqual("일초");
});

test('Minute 1', () => {
    let Value: string = TestCall.Call("{var.minute}{unit.minute}", "1");
    expect(Value).toEqual("일분");
});

test('Hour 1', () => {
    let Value: string = TestCall.Call("{var.hour}{unit.hour}", "1");
    expect(Value).toEqual("한시");
});

test('Day 1', () => {
    let Value: string = TestCall.Call("{var.day}{unit.day}", "1");
    expect(Value).toEqual("일일");
});

test('Month 1', () => {
    let Value: string = TestCall.Call("{var.month}{unit.month}", "6");
    expect(Value).toEqual("유월");
});

test('Year 1', () => {
    let Value: string = TestCall.Call("{var.year}{unit.year}", "2017");
    expect(Value).toEqual("이천십칠년");
});

test('Age 1', () => {
    let Value: string = TestCall.Call("{var.age} {unit.age}", "23");
    expect(Value).toEqual("스물세 살");
});

test('Dollar 1', () => {
    let Value: string = TestCall.Call("{var.$} {unit.$}", "200");
    expect(Value).toEqual("이백 달러");
});

test('Won 5000 ', () => {
    let Value: string = TestCall.Call("{var.₩} {unit.₩}", "5000");
    expect(Value).toEqual("오천 원");
});

test('Won 5000 korea with backslash', () => {
    let Value: string = TestCall.Call("{var.\\} {unit.\\}", "5000");
    expect(Value).toEqual("오천 원");
});

test('List', () => {
    let expected: string = "item, animal, cup, bottle, slice, book, car, action, order, clothing, people, bigwigs, servings, second, minute, hour, day, month, year, age, $, ₩";
    let Value: string = TestCall.Call("{unit.list}", "");
    expect(Value).toEqual(expected);
});