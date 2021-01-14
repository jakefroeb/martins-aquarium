const fishCollection = [
    {
        image:"images/eel.jpeg",
        name: "Bart",
        species: "eel",
        length: 22,
        location: "arkansas",
        food:"crustaceans"
    },
    {
        image:"images/crab.jpeg",
        name: "Doug",
        species: "crab",
        length: 3,
        location: "Mississippi",
        food:"humans"
    },
    {
        image:"images/hermit crab.jpeg",
        name: "Shelly",
        species: "hermit crab",
        length: 5,
        location: "Tennessee",
        food:"toes"
    },
    {
        image:"images/shark.jpeg",
        name: "Alice",
        species: "shark",
        length: 15,
        location: "California",
        food:"kale"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}
export const mostHolyFish = () => {
    const holyFish = []
     for(const fish of fishCollection){
         if(fish.length % 3 == 0){
             console.log(fish)
             holyFish.push(fish);
         }
     }
     return holyFish  
     }

export const soldierFish = () => {
    const soldiers = []
    for(const fish of fishCollection){
        if(fish.length % 5 == 0){
            soldiers.push(fish);
        }
    }
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
    for(const fish of fishCollection){
        if(fish.length % 5 != 0 && fish.length % 3 != 0){
            regularFish.push(fish);
        }
    }
    
    return regularFish
}