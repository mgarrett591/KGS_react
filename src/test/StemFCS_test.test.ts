import { TestCall } from "./testcall";

test('FCS form of 켜다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "켜다");
    expect(Value).toEqual("켜어");
});

test('FCS form of 하다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "하다");
    expect(Value).toEqual("해");
});

test('FCS form of 하다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "노래하다");
    expect(Value).toEqual("노래해");
});

test('FCS form of 작다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "작다");
    expect(Value).toEqual("작아");
});

test('FCS form of 싸다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "싸다");
    expect(Value).toEqual("싸");
});

test('FCS form of 오다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "오다");
    expect(Value).toEqual("와");
});

test('FCS form of ', () => {
    let Value: string = TestCall.Call("{var.fcs}", "믿다");
    expect(Value).toEqual("믿어");
});

test('FCS form of 마시다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "마시다");
    expect(Value).toEqual("마셔");
});

test('FCS form of 필요없다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "필요없다");
    expect(Value).toEqual("필요없어");
});

test('FCS form of 끝내다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "끝내다");
    expect(Value).toEqual("끝내");
});

test('FCS form of 높다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "높다");
    expect(Value).toEqual("높아");
});

test('FCS form of 주다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "주다");
    expect(Value).toEqual("줘");
});

test('FCS form of 떠들다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "떠들다");
    expect(Value).toEqual("떠들어");
});

test('FCS form of 나쁘다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "나쁘다");
    expect(Value).toEqual("나빠");
});

test('FCS form of 잠그다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "잠그다");
    expect(Value).toEqual("잠가");
});

test('FCS form of 사귀다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "사귀다");
    expect(Value).toEqual("사귀어");
});

test('FCS when passed a nonverb', () => {
    let Value: string = TestCall.Call("{var.fcs}", "");
    expect(Value).toEqual("{var.fcs}");
});

test('FCS form of 다', () => {
    let Value: string = TestCall.Call("{var.fcs}", "다");
    expect(Value).toEqual("{var.fcs}");
});
