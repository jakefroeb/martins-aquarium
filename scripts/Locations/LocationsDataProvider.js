const locationCollection = [
    {
       name: "Catalina",
       date:"11/2/2001"
    },
    {
        name: "Mississippi River",
        date:"12/2/2000"
     },
     {
        name: "Amazon River",
        date: "1/2/1962"
     }
]
export const useLocation = () => {
    return locationCollection.slice();
}