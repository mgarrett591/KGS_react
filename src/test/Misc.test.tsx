import { TestCall } from "./testcall";

test("Don't mess with the caseness of the var values'", () => {
    let Value: string = TestCall.Call("{var}", "Success!");
    expect(Value).toEqual("Success!");
});
