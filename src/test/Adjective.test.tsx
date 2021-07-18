import { TestCall } from "./testcall";

test('Adjective form of 싸다', () => {
    let Value: string = TestCall.Call("{var.adj}", "싸다");
    expect(Value).toEqual("싼");
});

test('Adjective form of 빠르다', () => {
    let Value: string = TestCall.Call("{var.adj}", "빠르다");
    expect(Value).toEqual("빠른");
});

test('Adjective form of 같은', () => {
    let Value: string = TestCall.Call("{var.adj}", "같다");
    expect(Value).toEqual("같은");
});

test('Adjective form of 조용한', () => {
    let Value: string = TestCall.Call("{var.adj}", "조용하다");
    expect(Value).toEqual("조용한");
});

test('Adjective form of 매운', () => {
    let Value: string = TestCall.Call("{var.adj}", "맵다");
    expect(Value).toEqual("매운");
});

test('Adjective form of 단', () => {
    let Value: string = TestCall.Call("{var.adj}", "달다");
    expect(Value).toEqual("단");
});

test('Adjective form of 재미있는', () => {
    let Value: string = TestCall.Call("{var.adj}", "재미있다");
    expect(Value).toEqual("재미있는");
});

test('Adjective form of 맛없는', () => {
    let Value: string = TestCall.Call("{var.adj}", "맛없다");
    expect(Value).toEqual("맛없는");
});


