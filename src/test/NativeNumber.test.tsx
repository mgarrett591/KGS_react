import { Num_lib } from "../num_lib";

test('Native 0', () => {
    let Value: string = Num_lib.Native("0");
    expect(Value).toEqual("공");
});

test('Native 1', () => {
    let Value: string = Num_lib.Native("1");
    expect(Value).toEqual("하나");
});

test('Native 2', () => {
    let Value: string = Num_lib.Native("2");
    expect(Value).toEqual("둘");
});

test('Native 3', () => {
    let Value: string = Num_lib.Native("3");
    expect(Value).toEqual("셋");
});

test('Native 4', () => {
    let Value: string = Num_lib.Native("4");
    expect(Value).toEqual("넷");
});

test('Native 5', () => {
    let Value: string = Num_lib.Native("5");
    expect(Value).toEqual("다섯");
});

test('Native 6', () => {
    let Value: string = Num_lib.Native("6");
    expect(Value).toEqual("여섯");
});

test('Native 7', () => {
    let Value: string = Num_lib.Native("7");
    expect(Value).toEqual("일곱");
});

test('Native 8', () => {
    let Value: string = Num_lib.Native("8");
    expect(Value).toEqual("여덟");
});

test('Native 9', () => {
    let Value: string = Num_lib.Native("9");
    expect(Value).toEqual("아홉");
});

//10
test('Native 10', () => {
    let Value: string = Num_lib.Native("10");
    expect(Value).toEqual("열");
});

test('Native 20', () => {
    let Value: string = Num_lib.Native("20");
    expect(Value).toEqual("스물");
});

test('Native 30', () => {
    let Value: string = Num_lib.Native("30");
    expect(Value).toEqual("서른");
});

test('Native 40', () => {
    let Value: string = Num_lib.Native("40");
    expect(Value).toEqual("마흔");
});

test('Native 50', () => {
    let Value: string = Num_lib.Native("50");
    expect(Value).toEqual("쉰");
});

test('Native 60', () => {
    let Value: string = Num_lib.Native("60");
    expect(Value).toEqual("예순");
});

test('Native 70', () => {
    let Value: string = Num_lib.Native("70");
    expect(Value).toEqual("일흔");
});

test('Native 80', () => {
    let Value: string = Num_lib.Native("80");
    expect(Value).toEqual("여든");
});

test('Native 90', () => {
    let Value: string = Num_lib.Native("90");
    expect(Value).toEqual("아흔");
});

test('Native 10s', () => {
    let Value: string = Num_lib.Native("19");
    expect(Value).toEqual("열아홉");
});

test('Native 20s', () => {
    let Value: string = Num_lib.Native("28");
    expect(Value).toEqual("스물여덟");
});

test('Native 30s', () => {
    let Value: string = Num_lib.Native("37");
    expect(Value).toEqual("서른일곱");
});

test('Native 40s', () => {
    let Value: string = Num_lib.Native("46");
    expect(Value).toEqual("마흔여섯");
});

test('Native 50s', () => {
    let Value: string = Num_lib.Native("55");
    expect(Value).toEqual("쉰다섯");
});

test('Native 60s', () => {
    let Value: string = Num_lib.Native("64");
    expect(Value).toEqual("예순넷");
});

test('Native 70s', () => {
    let Value: string = Num_lib.Native("73");
    expect(Value).toEqual("일흔셋");
});

test('Native 80s', () => {
    let Value: string = Num_lib.Native("82");
    expect(Value).toEqual("여든둘");
});

test('Native 90s', () => {
    let Value: string = Num_lib.Native("91");
    expect(Value).toEqual("아흔하나");
});

test('Native 100', () => {
    let Value: string = Num_lib.Native("100");
    expect(Value).toEqual("백");
});
