import { Num_lib } from "../num_lib";

test('Native counter 0', () => {
    let Value: string = Num_lib.NativeCounter("0");
    expect(Value).toEqual("공");
});

test('Native counter 1', () => {
    let Value: string = Num_lib.NativeCounter("1");
    expect(Value).toEqual("한");
});

test('Native counter 2', () => {
    let Value: string = Num_lib.NativeCounter("2");
    expect(Value).toEqual("두");
});

test('Native counter 3', () => {
    let Value: string = Num_lib.NativeCounter("3");
    expect(Value).toEqual("세");
});

test('Native counter 4', () => {
    let Value: string = Num_lib.NativeCounter("4");
    expect(Value).toEqual("네");
});

test('Native counter 5', () => {
    let Value: string = Num_lib.NativeCounter("5");
    expect(Value).toEqual("다섯");
});

test('Native counter 6', () => {
    let Value: string = Num_lib.NativeCounter("6");
    expect(Value).toEqual("여섯");
});

test('Native counter 7', () => {
    let Value: string = Num_lib.NativeCounter("7");
    expect(Value).toEqual("일곱");
});

test('Native counter 8', () => {
    let Value: string = Num_lib.NativeCounter("8");
    expect(Value).toEqual("여덟");
});

test('Native counter 9', () => {
    let Value: string = Num_lib.NativeCounter("9");
    expect(Value).toEqual("아홉");
});

//#10
test('Native counter 10', () => {
    let Value: string = Num_lib.NativeCounter("10");
    expect(Value).toEqual("열");
});

test('Native counter 20', () => {
    let Value: string = Num_lib.NativeCounter("20");
    expect(Value).toEqual("스무");
});

test('Native counter 30', () => {
    let Value: string = Num_lib.NativeCounter("30");
    expect(Value).toEqual("서른");
});

test('Native counter 40', () => {
    let Value: string = Num_lib.NativeCounter("40");
    expect(Value).toEqual("마흔");
});

test('Native counter 50', () => {
    let Value: string = Num_lib.NativeCounter("50");
    expect(Value).toEqual("쉰");
});

test('Native counter 60', () => {
    let Value: string = Num_lib.NativeCounter("60");
    expect(Value).toEqual("예순");
});

test('Native counter 70', () => {
    let Value: string = Num_lib.NativeCounter("70");
    expect(Value).toEqual("일흔");
});

test('Native counter 80', () => {
    let Value: string = Num_lib.NativeCounter("80");
    expect(Value).toEqual("여든");
});

test('Native counter 90', () => {
    let Value: string = Num_lib.NativeCounter("90");
    expect(Value).toEqual("아흔");
});

test('Native counter 10s', () => {
    let Value: string = Num_lib.NativeCounter("19");
    expect(Value).toEqual("열아홉");
});

test('Native counter 20s', () => {
    let Value: string = Num_lib.NativeCounter("28");
    expect(Value).toEqual("스물여덟");
});

test('Native counter 30s', () => {
    let Value: string = Num_lib.NativeCounter("37");
    expect(Value).toEqual("서른일곱");
});

test('Native counter 40s', () => {
    let Value: string = Num_lib.NativeCounter("46");
    expect(Value).toEqual("마흔여섯");
});

test('Native counter 50s', () => {
    let Value: string = Num_lib.NativeCounter("55");
    expect(Value).toEqual("쉰다섯");
});

test('Native counter 60s', () => {
    let Value: string = Num_lib.NativeCounter("64");
    expect(Value).toEqual("예순네");
});

test('Native counter 70s', () => {
    let Value: string = Num_lib.NativeCounter("73");
    expect(Value).toEqual("일흔세");
});

test('Native counter 80s', () => {
    let Value: string = Num_lib.NativeCounter("82");
    expect(Value).toEqual("여든두");
});

test('Native counter 90s', () => {
    let Value: string = Num_lib.NativeCounter("91");
    expect(Value).toEqual("아흔한");
});

//100
test('Native counter 100', () => {
    let Value: string = Num_lib.NativeCounter("100");
    expect(Value).toEqual("백");
});
