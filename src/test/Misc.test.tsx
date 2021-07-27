import { Grammer } from "../Grammer";
import { KGSi } from "../KGSi";

test("Don't mess with the caseness of the var values'", () => {
    let gram = new Grammer();
    gram.Templet = '{var}';
    gram.WordMap.set("var", "Success!");
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    //expect(Value).toEqual("Success!");
});

test("Sytax Error'", () => {
    let gram = new Grammer();
    gram.Templet = '[var}';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("");
    let Message: string = gram.Messages[0];
    //expect(Message).toEqual("Check your Syntax!");
});

test("Sytax Error'", () => {
    let gram = new Grammer();
    gram.Templet = '{var]';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("");
    let Message: string = gram.Messages[0];
    //expect(Message).toEqual("Check your Syntax!");
});

test("Sytax Error'", () => {
    let gram = new Grammer();
    gram.Templet = '{{var]';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("");
    let Message: string = gram.Messages[0];
    //expect(Message).toEqual("Check your Syntax!");
});

test("Sytax Error'", () => {
    let gram = new Grammer();
    gram.Templet = '[var}}';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("");
    let Message: string = gram.Messages[0];
    //expect(Message).toEqual("Check your Syntax!");
});

test("Sytax Error'", () => {
    let gram = new Grammer();
    gram.Templet = '{var]]';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("");
    let Message: string = gram.Messages.toString();
    //expect(Message).toEqual("Check your Syntax!");
});

test("Sytax Error'", () => {
    let gram = new Grammer();
    gram.Templet = '[[var}';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("");
    let Message: string = gram.Messages[0];
    //expect(Message).toEqual("Check your Syntax!");
});