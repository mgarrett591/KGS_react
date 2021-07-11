import { Num_lib } from "../num_lib";

test('Order 1', () => {
    let Value: string = Num_lib.Order("1");
    expect(Value).toEqual("첫");
});

test('Month 6', () => {
    let Value: string = Num_lib.Month("6");
    expect(Value).toEqual("유");
});

test('Month 10', () => {
    let Value: string = Num_lib.Month("10");
    expect(Value).toEqual("시");
});
