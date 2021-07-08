import { KGSi } from "../KGSi";

let VTable: string[] = [];
//VTable["dog"] = "DOGs";
console.log(KGSi.Interpolator("",VTable));
////Miss matched {
console.log(KGSi.Interpolator("{}{}[]{}[]{}}{}{}[]",VTable));  

//Miss matched [
console.log(KGSi.Interpolator("{}{}[]{}[{}{}{}{}[]",VTable));

console.log(KGSi.Interpolator("{dog}[]",VTable));
console.log(KGSi.Interpolator("{dog}[rule]",VTable));