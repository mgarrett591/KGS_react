import { Num_lib } from "../num_lib";

test('Sino 0', () => {
    let Value: string = Num_lib.Sino("0");
    expect(Value).toEqual("공");
});

test('Sino 1', () => {
    let Value: string = Num_lib.Sino("1");
    expect(Value).toEqual("일");
});

test('Sino 2', () => {
    let Value: string = Num_lib.Sino("2");
    expect(Value).toEqual("이");
});

test('Sino 3', () => {
    let Value: string = Num_lib.Sino("3");
    expect(Value).toEqual("삼");
});

test('Sino 4', () => {
    let Value: string = Num_lib.Sino("4");
    expect(Value).toEqual("사");
});

test('Sino 5', () => {
    let Value: string = Num_lib.Sino("5");
    expect(Value).toEqual("오");
});

test('Sino 7', () => {
    let Value: string = Num_lib.Sino("7");
    expect(Value).toEqual("칠");
});

//10
test('Sino 10', () => {
    let Value: string = Num_lib.Sino("10");
    expect(Value).toEqual("십");
});

test('Sino 20', () => {
    let Value: string = Num_lib.Sino("20");
    expect(Value).toEqual("이십");
});

test('Sino 10s', () => {
    let Value: string = Num_lib.Sino("49");
    expect(Value).toEqual("사십구");
});

test('Sino 10s 2nd example', () => {
    let Value: string = Num_lib.Sino("68");
    expect(Value).toEqual("육십팔");
});

test('Sino 10s 3rd example', () => {
    let Value: string = Num_lib.Sino("73");
    expect(Value).toEqual("칠십삼");
});

test('Sino 10s 4th example', () => {
    let Value: string = Num_lib.Sino("75");
    expect(Value).toEqual("칠십오");
});

test('Sino 10s 5th example', () => {
    let Value: string = Num_lib.Sino("32");
    expect(Value).toEqual("삼십이");
});

test('Sino 10s 6th example', () => {
    let Value: string = Num_lib.Sino("58");
    expect(Value).toEqual("오십팔");
});

test('Sino 10s 7th example', () => {
    let Value: string = Num_lib.Sino("79");
    expect(Value).toEqual("칠십구");
});

//100
test('Sino 100', () => {
    let Value: string = Num_lib.Sino("100");
    expect(Value).toEqual("백");
});

test('Sino 100s 1st example', () => {
    let Value: string = Num_lib.Sino("523");
    expect(Value).toEqual("오백이십삼");
});

test('Sino 100s 2nd example', () => {
    let Value: string = Num_lib.Sino("712");
    expect(Value).toEqual("칠백십이");
});

test('Sino 100s 3rd example', () => {
    let Value: string = Num_lib.Sino("886");
    expect(Value).toEqual("팔백팔십육");
});

test('Sino 100s 4th example', () => {
    let Value: string = Num_lib.Sino("149");
    expect(Value).toEqual("백사십구");
});

test('Sino 100s 5th example', () => {
    let Value: string = Num_lib.Sino("369");
    expect(Value).toEqual("삼백육십구");
});

test('Sino 100s 6th example', () => {
    let Value: string = Num_lib.Sino("144");
    expect(Value).toEqual("백사십사");
});

// 1_000
test('Sino 1_000', () => {
    let Value: string = Num_lib.Sino("1000");
    expect(Value).toEqual("천");
});

test('Sino 1_000s 1st example', () => {
    let Value: string = Num_lib.Sino("4348");
    expect(Value).toEqual("사천삼백사십팔");
});

test('Sino 1_000s 2nd example', () => {
    let Value: string = Num_lib.Sino("3710");
    expect(Value).toEqual("삼천칠백십");
});

test('Sino 1_000s 3rd example', () => {
    let Value: string = Num_lib.Sino("8734");
    expect(Value).toEqual("팔천칠백삼십사");
});

test('Sino 1_000s 4th example', () => {
    let Value: string = Num_lib.Sino("9271");
    expect(Value).toEqual("구천이백칠십일");
});

test('Sino 1_000s 5th example', () => {
    let Value: string = Num_lib.Sino("2022");
    expect(Value).toEqual("이천이십이");
});

//10_000
test('Sino 10_000s', () => {
    let Value: string = Num_lib.Sino("10000");
    expect(Value).toEqual("만");
});

test('Sino 10_000s 1st example', () => {
    let Value: string = Num_lib.Sino("72210");
    expect(Value).toEqual("칠만 이천이백십");
});

test('Sino 10_000s 2nd example', () => {
    let Value: string = Num_lib.Sino("48402");
    expect(Value).toEqual("사만 팔천사백이");
});

test('Sino 10_000s 3rd example', () => {
    let Value: string = Num_lib.Sino("93880");
    expect(Value).toEqual("구만 삼천팔백팔십");
});

test('Sino 10_000s 4th example', () => {
    let Value: string = Num_lib.Sino("45212");
    expect(Value).toEqual("사만 오천이백십이");
});

//100_000
test('Sino 100_000s', () => {
    let Value: string = Num_lib.Sino("100000");
    expect(Value).toEqual("십만");
});

test('Sino 100_000s 1st example', () => {
    let Value: string = Num_lib.Sino("646346");
    expect(Value).toEqual("육십사만 육천삼백사십육");
});

test('Sino 100_000s 2nd example', () => {
    let Value: string = Num_lib.Sino("323353");
    expect(Value).toEqual("삼십이만 삼천삼백오십삼");
});

test('Sino 100_000s 3rd example', () => {
    let Value: string = Num_lib.Sino("967637");
    expect(Value).toEqual("구십육만 칠천육백삼십칠");
});

//1_000_000
test('Sino 1_000_000', () => {
    let Value: string = Num_lib.Sino("1000000");
    expect(Value).toEqual("백만");
});

test('Sino 1_000_000s 1st example', () => {
    let Value: string = Num_lib.Sino("3880914");
    expect(Value).toEqual("삼백팔십팔만 구백십사");
});

test('Sino 1_000_000s 2nd example', () => {
    let Value: string = Num_lib.Sino("1598357");
    expect(Value).toEqual("백오십구만 팔천삼백오십칠");
});

//10_000_000
test('Sino ', () => {
    let Value: string = Num_lib.Sino("10000000");
    expect(Value).toEqual("천만");
});

test('Sino ', () => {
    let Value: string = Num_lib.Sino("14740604");
    expect(Value).toEqual("천사백칠십사만 육백사");
});

//100_000_000
test('Sino ', () => {
    let Value: string = Num_lib.Sino("100000000");
    expect(Value).toEqual("일억");
});

test('Sino ', () => {
    let Value: string = Num_lib.Sino("420495171");
    expect(Value).toEqual("사억 이천사십구만 오천백칠십일");
});

//1_000_000_000
test('Sino ', () => {
    let Value: string = Num_lib.Sino("1000000000");
    expect(Value).toEqual("십억");
});

test('Sino ', () => {
    let Value: string = Num_lib.Sino("6793825729");
    expect(Value).toEqual("육십칠억 구천삼백팔십이만 오천칠백이십구");
});

//10_000_000_000
test('Sino ', () => {
    let Value: string = Num_lib.Sino("10000000000");
    expect(Value).toEqual("백억");
});

test('Sino ', () => {
    let Value: string = Num_lib.Sino("38387821192");
    expect(Value).toEqual("삼백팔십삼억 팔천칠백팔십이만 천백구십이");
});

//100_000_000_000
test('Sino ', () => {
    let Value: string = Num_lib.Sino("100000000000");
    expect(Value).toEqual("천억");
});

test('Sino ', () => {
    let Value: string = Num_lib.Sino("995882969594");
    expect(Value).toEqual("구천구백오십팔억 팔천이백구십육만 구천오백구십사");
});

//1_000_000_000_000 and beyond
test('Sino ', () => {
    let Value: string = Num_lib.Sino("1000000000000");
    expect(Value).toEqual("일조");
});

test('Sino ', () => {
    let Value: string = Num_lib.Sino("1234567891234");
    expect(Value).toEqual("일이삼사오육칠팔구일이삼사");
});
