const tipCollection = [
    {
       text: "Bring some bugspray",
       author: "Martin",
       location: "Mississippi River"
    },
    {
        text: "A wetsuit is needed",
        author: "Martin",
        location: "Catalina Island"
     },
     {
        text: "Dont drink the water",
        author: "Martin",
        location: "Amazon River"
     }
]
export const useTip = () => {
    return tipCollection.slice();
}