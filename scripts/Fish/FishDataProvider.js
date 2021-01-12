const fishCollection = [
    {
        image:"images/eel.jpeg",
        name: "Bart",
        species: "eel",
        length: "20ft",
        location: "arkansas",
        food:"crustaceans"
    },
    {
        image:"images/crab.jpeg",
        name: "Doug",
        species: "crab",
        length: "2ft",
        location: "Mississippi",
        food:"humans"
    },
    {
        image:"images/hermit crab.jpeg",
        name: "Shelly",
        species: "hermit crab",
        length: "1in",
        location: "Tennessee",
        food:"toes"
    },
    {
        image:"images/shark.jpeg",
        name: "Alice",
        species: "shark",
        length: "2ft",
        location: "California",
        food:"kale"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}