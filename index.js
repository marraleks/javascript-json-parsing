import {birdData} from './birds.js'

//Oppgave 1
// Log the description field from birdData
console.log(birdData.description)


console.log("======================================")
//Oppgave 2
// Use the javascript map() function to log all bird family names
birdData.birds.map( fam => console.log(fam.family))


console.log("======================================")
//Oppgave 3
// Use map() to log all birdnames from the family 'Diving Petrels'
birdData.birds[2].members.map( petrelsFamily => console.log(petrelsFamily))


console.log("======================================")
//Oppgave 4
// Use two nested map() functions to log ALL birdmembers
birdData.birds.map(family => family.members.map(mem => console.log(mem)))


console.log("======================================")
//Oppgave 5 
//Use two nested map() functions to log all families followed by its members
birdData.birds.map( 
    fam => {
        console.log("FAMILY:")
        console.log(fam.family)
        console.log("MEMBERS:")
            fam.members.map(mem => console.log(mem))
            console.log("===========")
    }
)


//Oppgave 6 
//Use the javascript filter() function to log all bird families which name includes a 'g'
const familiesWithG = birdData.birds.filter(famWithG => famWithG.family.includes("g"))
console.log(familiesWithG)


console.log("======================================")
//Oppgave 7 
// Use the javascript spread() function to create a new array with ALL birdnames
let birdNames = []

birdData.birds.map(
    allFamilies => allFamilies.members.map(
        birdName => birdNames = [...birdNames, birdName]
    )
)
console.log(birdNames)


console.log("======================================")
//Oppgave 8
// Use the javascript filter() to log all birds that includes the word 'Antarctic'
const antarcticBirds = birdNames.filter(antartic => antartic.includes("Antarctic"))
console.log(antarcticBirds)











// const numbers = [1, 3, 4, 123, 14, 14, 1, 55, 502, 124]

// numbers.map( element => console.log(element))

// const filtered = numbers.filter(element => element > 10)
// console.log(filtered)

// birdData.birds.map(element => console.log(element))

// const filterBirds = birdData.birds.filter( fam => fam.family.includes('A') )
// console.log(filterBirds)
