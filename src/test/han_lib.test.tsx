import {Han_lib, LetterPosition} from "../han_lib"

test('No Batchim 자', () => {
    let Batchim: boolean = Han_lib.Batchim("자");
    expect(Batchim).toEqual(false);
});

test('No Batchim 장', () => {
    let Batchim: boolean = Han_lib.Batchim("장");
    expect(Batchim).toEqual(true);
});

test('No Batchim 잘', () => {
    let Batchim: boolean = Han_lib.Batchim("잘");
    expect(Batchim).toEqual(true);
});

test('No Batchim "The"', () => {
    let Batchim: boolean = Han_lib.Batchim("The");
    expect(Batchim).toEqual(true);
});

test('No Batchim ""', () => {
    let Batchim: boolean = Han_lib.Batchim("");
    expect(Batchim).toEqual(false);
});

test('No NonㄹBatchim 자', () => {
    let Batchim: boolean = Han_lib.NonㄹBatchim("자");
    expect(Batchim).toEqual(false);
});

test('No NonㄹBatchim 장', () => {
    let Batchim: boolean = Han_lib.NonㄹBatchim("장");
    expect(Batchim).toEqual(true);
});

test('No NonㄹBatchim 잘', () => {
    let Batchim: boolean = Han_lib.NonㄹBatchim("잘");
    expect(Batchim).toEqual(false);
});

test('No NonㄹBatchim "The"', () => {
    let Batchim: boolean = Han_lib.NonㄹBatchim("The");
    expect(Batchim).toEqual(true);
});

test('No NonㄹBatchim ""', () => {
    let Batchim: boolean = Han_lib.NonㄹBatchim("");
    expect(Batchim).toEqual(false);
});

//OhAh {true, false}

//Stem {"", 가다, 하다, 한굴}
test('Stem ""', () => {
    let Stem: string = Han_lib.Stem("");
    expect(Stem).toEqual("");
});

test('Stem 가다', () => {
    let Stem: string = Han_lib.Stem("가다");
    expect(Stem).toEqual("가");
});

test('Stem 하다', () => {
    let Stem: string = Han_lib.Stem("하다");
    expect(Stem).toEqual("하");
});

test('Stem 한굴', () => {
    let Stem: string = Han_lib.Stem("한굴");
    expect(Stem).toEqual("한");
});

//Hstem {"", , , , }
test('Hstem ""', () => {
    let Stem: string = Han_lib.Hstem("");
    expect(Stem).toEqual("");
});

test('Hstem 가다', () => {
    let Stem: string = Han_lib.Hstem("가다");
    expect(Stem).toEqual("가");
});

test('Hstem 하다', () => {
    let Stem: string = Han_lib.Hstem("하다");
    expect(Stem).toEqual("");
});

test('Hstem 한굴', () => {
    let Stem: string = Han_lib.Hstem("한굴");
    expect(Stem).toEqual("한");
});

test('Hstem 공부하다', () => {
    let Stem: string = Han_lib.Hstem("공부하다");
    expect(Stem).toEqual("공부");
});

//Build and Tear tests
function build(Letters: string){
    Letters = Letters + "   ";
    let Ka = "가";
    Ka = Han_lib.SetLetterInFinalSyllable(LetterPosition.Initial, Ka, Letters[0]);
    Ka = Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, Ka, Letters[1]);
    Ka = Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, Ka, Letters[2]);
    return Ka;
}

function tear(Block: string){
return Han_lib.GetLetterFromFinalSyllable(LetterPosition.Initial,Block) +
Han_lib.GetLetterFromFinalSyllable(LetterPosition.Medial,Block) +
Han_lib.GetLetterFromFinalSyllable(LetterPosition.Final,Block);
}

test('Tear and Build 가', () => {
    let Tear: string = tear("가");
    let Build: string = build("ㄱㅏ ");
    expect(Tear).toEqual("ㄱㅏ ");
    expect(Build).toEqual("가");
});

test('Tear and Build 깩', () => {
    let Tear: string = tear("깩");
    let Build: string = build("ㄲㅐㄱ");
    expect(Tear).toEqual("ㄲㅐㄱ");
    expect(Build).toEqual("깩");
});

test('Tear and Build 냒', () => {
    let Tear: string = tear("냒");
    let Build: string = build("ㄴㅑㄲ");
    expect(Tear).toEqual("ㄴㅑㄲ");
    expect(Build).toEqual("냒");
});

test('Tear and Build 댻', () => {
    let Tear: string = tear("댻");
    let Build: string = build("ㄷㅒㄳ");
    expect(Tear).toEqual("ㄷㅒㄳ");
    expect(Build).toEqual("댻");
});

test('Tear and Build 떤', () => {
    let Tear: string = tear("떤");
    let Build: string = build("ㄸㅓㄴ");
    expect(Tear).toEqual("ㄸㅓㄴ");
    expect(Build).toEqual("떤");
});

test('Tear and Build 렍', () => {
    let Tear: string = tear("렍");
    let Build: string = build("ㄹㅔㄵ");
    expect(Tear).toEqual("ㄹㅔㄵ");
    expect(Build).toEqual("렍");
});

test('Tear and Build 멶', () => {
    let Tear: string = tear("멶");
    let Build: string = build("ㅁㅕㄶ");
    expect(Tear).toEqual("ㅁㅕㄶ");
    expect(Build).toEqual("멶");
});

test('Tear and Build 볟', () => {
    let Tear: string = tear("볟");
    let Build: string = build("ㅂㅖㄷ");
    expect(Tear).toEqual("ㅂㅖㄷ");
    expect(Build).toEqual("볟");
});

test('Tear and Build 뽈', () => {
    let Tear: string = tear("뽈");
    let Build: string = build("ㅃㅗㄹ");
    expect(Tear).toEqual("ㅃㅗㄹ");
    expect(Build).toEqual("뽈");
});

test('Tear and Build 솱', () => {
    let Tear: string = tear("솱");
    let Build: string = build("ㅅㅘㄺ");
    expect(Tear).toEqual("ㅅㅘㄺ");
    expect(Build).toEqual("솱");
});

test('Tear and Build 쐚', () => {
    let Tear: string = tear("쐚");
    let Build: string = build("ㅆㅙㄻ");
    expect(Tear).toEqual("ㅆㅙㄻ");
    expect(Build).toEqual("쐚");
});

test('Tear and Build 욃', () => {
    let Tear: string = tear("욃");
    let Build: string = build("ㅇㅚㄼ");
    expect(Tear).toEqual("ㅇㅚㄼ");
    expect(Build).toEqual("욃");
});

test('Tear and Build 죬', () => {
    let Tear: string = tear("죬");
    let Build: string = build("ㅈㅛㄽ");
    expect(Tear).toEqual("ㅈㅛㄽ");
    expect(Build).toEqual("죬");
});

test('Tear and Build 쭕', () => {
    let Tear: string = tear("쭕");
    let Build: string = build("ㅉㅜㄾ");
    expect(Tear).toEqual("ㅉㅜㄾ");
    expect(Build).toEqual("쭕");
});

test('Tear and Build 춾', () => {
    let Tear: string = tear("춾");
    let Build: string = build("ㅊㅝㄿ");
    expect(Tear).toEqual("ㅊㅝㄿ");
    expect(Build).toEqual("춾");
});

test('Tear and Build 퀧', () => {
    let Tear: string = tear("퀧");
    let Build: string = build("ㅋㅞㅀ");
    expect(Tear).toEqual("ㅋㅞㅀ");
    expect(Build).toEqual("퀧");
});

test('Tear and Build 튐', () => {
    let Tear: string = tear("튐");
    let Build: string = build("ㅌㅟㅁ");
    expect(Tear).toEqual("ㅌㅟㅁ");
    expect(Build).toEqual("튐");
});

test('Tear and Build 퓹', () => {
    let Tear: string = tear("퓹");
    let Build: string = build("ㅍㅠㅂ");
    expect(Tear).toEqual("ㅍㅠㅂ");
    expect(Build).toEqual("퓹");
});

test('Tear and Build 흢', () => {
    let Tear: string = tear("흢");
    let Build: string = build("ㅎㅡㅄ");
    expect(Tear).toEqual("ㅎㅡㅄ");
    expect(Build).toEqual("흢");
});

test('Tear and Build 흿', () => {
    let Tear: string = tear("흿");
    let Build: string = build("ㅎㅢㅅ");
    expect(Tear).toEqual("ㅎㅢㅅ");
    expect(Build).toEqual("흿");
});

test('Tear and Build 힜', () => {
    let Tear: string = tear("힜");
    let Build: string = build("ㅎㅣㅆ");
    expect(Tear).toEqual("ㅎㅣㅆ");
    expect(Build).toEqual("힜");
});

test('Tear and Build 힝', () => {
    let Tear: string = tear("힝");
    let Build: string = build("ㅎㅣㅇ");
    expect(Tear).toEqual("ㅎㅣㅇ");
    expect(Build).toEqual("힝");
});

test('Tear and Build 힞', () => {
    let Tear: string = tear("힞");
    let Build: string = build("ㅎㅣㅈ");
    expect(Tear).toEqual("ㅎㅣㅈ");
    expect(Build).toEqual("힞");
});

test('Tear and Build 힟', () => {
    let Tear: string = tear("힟");
    let Build: string = build("ㅎㅣㅊ");
    expect(Tear).toEqual("ㅎㅣㅊ");
    expect(Build).toEqual("힟");
});

test('Tear and Build 힠', () => {
    let Tear: string = tear("힠");
    let Build: string = build("ㅎㅣㅋ");
    expect(Tear).toEqual("ㅎㅣㅋ");
    expect(Build).toEqual("힠");
});

test('Tear and Build 힡', () => {
    let Tear: string = tear("힡");
    let Build: string = build("ㅎㅣㅌ");
    expect(Tear).toEqual("ㅎㅣㅌ");
    expect(Build).toEqual("힡");
});

test('Tear and Build 힢', () => {
    let Tear: string = tear("힢");
    let Build: string = build("ㅎㅣㅍ");
    expect(Tear).toEqual("ㅎㅣㅍ");
    expect(Build).toEqual("힢");
});
