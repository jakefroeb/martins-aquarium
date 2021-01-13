import {useTip} from "./TipDataProvider.js";
import {Tip} from "./Tip.js";

export const TipList = () => {
    const tipElement = document.querySelector(".tips")
    const tips = useTip()

    let tipHTMLRepresentation = ""
    for(const tip of tips){
        tipHTMLRepresentation += Tip(tip)
    }

    tipElement.innerHTML += `
    <article class="tipList">
        ${tipHTMLRepresentation}
    </article>
    `
}