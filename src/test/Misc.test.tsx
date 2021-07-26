import { TestCall } from "./testcall";

test("Don't mess with the caseness of the var values'", () => {
    let Value: string = TestCall.Var("{var}", "Success!");
    expect(Value).toEqual("Success!");
});

test("Sytax Error'", () => {
    let Value: string = TestCall.Var("[var}", "Success!");
    expect(Value).toEqual("Check your Syntax");
});

test("Sytax Error'", () => {
    let Value: string = TestCall.Var("{var]", "Success!");
    expect(Value).toEqual("Check your Syntax");
});

test("Sytax Error'", () => {
    let Value: string = TestCall.Var("{{var]", "Success!");
    expect(Value).toEqual("Check your Syntax");
});

test("Sytax Error'", () => {
    let Value: string = TestCall.Var("[var}}", "Success!");
    expect(Value).toEqual("Check your Syntax");
});

test("Sytax Error'", () => {
    let Value: string = TestCall.Var("{var]]", "Success!");
    expect(Value).toEqual("Check your Syntax");
});

test("Sytax Error'", () => {
    let Value: string = TestCall.Var("[[var}", "Success!");
    expect(Value).toEqual("Check your Syntax");
});