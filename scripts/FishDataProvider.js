const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        species: "eel",
        location: "",
        length: ""
    }
]
export const useFish = () => {
    return fishCollection.slice()
}