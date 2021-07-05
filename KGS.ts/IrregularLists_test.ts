import { IrregularLists } from "./irregularLists";

function LogVerb(verb: string){
    console.log(verb);
}

IrregularLists.ㄷIrregularList.forEach(LogVerb);
IrregularLists.ㅂIrregularList.forEach(LogVerb);
IrregularLists.르RegularList.forEach(LogVerb);