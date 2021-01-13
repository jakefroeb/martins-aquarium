import { useFish } from './Fish/FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

// Import the FishList here
import { FishList } from './Fish/FishList.js'

FishList();


// Tip Imports
import { TipList } from './Tips/TipList.js'

TipList();

// Location Imports

import { LocationsList } from './Locations/LocationsList.js'
LocationsList();