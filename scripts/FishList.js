/**
 *   FishList which renders individual fish objects as HTML
 */
import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector("#content")
    const fishes = useFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
        
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}