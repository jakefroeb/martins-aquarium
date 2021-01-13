import {useLocation} from "./LocationsDataProvider.js";
import {Location} from "./Location.js";

export const LocationsList = () => {
    const locationsElement = document.querySelector(".locations")
    const locations = useLocation()

    let locationHTMLRepresentation = ""
    for(const location of locations){
        locationHTMLRepresentation += Location(location)
    }

    locationsElement.innerHTML += `
    <article class="locationList">
        ${locationHTMLRepresentation}
    </article>
    `
}