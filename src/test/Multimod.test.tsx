import { KGSi } from "../KGSi";
import { Grammer } from "../Grammer";

//yo
test("Go / 가요", () => {
    let gram = new Grammer();
    gram.Templet = '{"가다".yo}';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("가요");
});

//pt.yo
test("He sang. / 그는 노래했어요.", () => {
    let gram = new Grammer();
    gram.Templet = '그[t] {"노래하다".pt.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("그는 노래했어요.");
});

//ft.yo
test("He will sing. / 그는 노래할 거예요.", () => {
    let gram = new Grammer();
    gram.Templet = '그[t] {"노래하다".ft.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("그는 노래할 거예요.");
});

//sup
test("Eunjeong eats candy. / 은정은 사당을 먹습니다.", () => {
    let gram = new Grammer();
    gram.Templet = '은정[t] 사당[을/를] {"먹다".sup}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("은정은 사당을 먹습니다.");
});

//sup (batchim)
test("Eunjeong rides a bus. / 은정은 버스를 탑니다.", () => {
    let gram = new Grammer();
    gram.Templet = '은정[t] 버스[을/를] {"타다".sup}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("은정은 버스를 탑니다.");
});

//ni
test("Does Yeongsuk eat cake. / 영숙은 케이크를 먹습니까?", () => {
    let gram = new Grammer();
    gram.Templet = '영숙[t] 케이크[을/를] {"먹다".ni}?';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("영숙은 케이크를 먹습니까?");
});

//ni (batchimless verb)
test("Does YeongSuk ride an airplane? / 영숙은 비행기을 탑니까?", () => {
    let gram = new Grammer();
    gram.Templet = '영숙[t] 비행기[을/를] {"타다".ni}?';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("영숙은 비행기를 탑니까?");
});

//ing
test("AhReum is dancing a dance. / 아름은 춤을 추고 있어요.", () => {
    let gram = new Grammer();
    gram.Templet = '아름[t] 춤[o] {"추다".ing.yo}.';
    let map: Map<string,string> = new Map<string,string>()
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("아름은 춤을 추고 있어요.");
});

//try {verb.stem}보다
test("Jeff tried to play a game. / 제프는 게임을 하봤어요.", () => {
    let gram = new Grammer();
    gram.Templet = '제프[t] 게임[o] {"하다".try.pt.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("제프는 게임을 하봤어요.");
});

//want {verb.stem}고 십다
test("Andrew wants to drink coffee / 앤드류는 카비를 마셔고 십어요.", () => {
    let gram = new Grammer();
    gram.Templet = '앤드류[t] 커피[o] {"마시다".want.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("앤드류는 커피를 마시고 십어요.");
});

//let's {verb.stem}[읍/ㅂ]시다
test("Let's Go / 갑시다", () => {
    let gram = new Grammer();
    gram.Templet = '{"가다".let}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("갑시다.");
});

test("Let's eat. / let's (batchim verb)", () => {
    let gram = new Grammer();
    gram.Templet = '{"먹다".let}';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("먹읍시다");
});

//let's (casual) 
test("Let's go. / 가자.", () => {
    let gram = new Grammer();
    gram.Templet = '{"가다".letc}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("가자.");
});

//let's (casual batchim) {verb.stem}자
test("Let's eat. / 먹자.", () => {
    let gram = new Grammer();
    gram.Templet = '{"먹다".letc}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("먹자.");
});

//shall {verb.stem}[ㄹ]까
test("Shall we dance? / 춤을 출까요?", () => {
    let gram = new Grammer();
    gram.Templet = '춤[o] {"추다".shall.yo}?';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("춤을 출까요?");
});

//can {verb.fcs}[ㄹ] 수 있다
test("He has the ability to sing. / 그는 노래할 수 있어요.", () => {
    let gram = new Grammer();
    gram.Templet = '그[t] {"노래하다".can.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("그는 노래할 수 있어요.");
});

//cannot {verb.fcs}[ㄹ] 수없다
test("She lacks the ability to sing. / 그녀는 노래할 수 없어요.", () => {
    let gram = new Grammer();
    gram.Templet = '그녀[t] {"노래하다".cant.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("그녀는 노래할 수 없어요.");
});

//neg {verb.stem}지 않다
test("He does not die. / 그는 죽지 않아요.", () => {
    let gram = new Grammer();
    gram.Templet = '그[t] {"죽다".neg.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("그는 죽지 않아요.");
});

//negc 안 {verb}
test("He didn't die. / 그는 안 죽아요.", () => {
    let gram = new Grammer();
    gram.Templet = '그[t] {"죽다".negc.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("그는 안 죽어요.");
});

//negc (하다) {verb.hstem} 안 하다
test("He didn't sing. / 그는 노래 안 했어요.", () => {
    let gram = new Grammer();
    gram.Templet = '그[t] {"노래하다".negc.pt.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("그는 노래 안 했어요.");
});

//mt {verb}지 못하다
test("The gods cannot die. / 신들 죽지 못해요.", () => {
    let gram = new Grammer();
    gram.Templet = '신들 {"죽다".mot.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("신들 죽지 못해요.");
});

//mtc 봇 {verb}
test("The gods can't die. / 신들 못 죽어요.", () => {
    let gram = new Grammer();
    gram.Templet = '신들 {"죽다".motc.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("신들 못 죽어요.");
});

//mtc (하다) {verb.hstem} 봇 하다
test("They can't sing. / 그들 노래 못 해요.", () => {
    let gram = new Grammer();
    gram.Templet = '그들 {"노래하다".motc.yo}.';
    gram = KGSi.Interpolator(gram);
    let Value: string = gram.EvalString;
    expect(Value).toEqual("그들 노래 못 해요.");
});