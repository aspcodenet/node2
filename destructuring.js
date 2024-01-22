// OBJECT DESTRUCTURING  - use case more readable code

// function importantList (iWant, iDontWant, iNeed) {
// 	return `${iWant} is what i want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
// }
// 100 rader ner

// function importantList (obj) {
//     // let iWant = obj.iWant
//     // let iDontWant = obj.iDontWant
//     // let iNeed = obj.iNeed
//     let {iWant,iDontWant,iNeed} = obj
// 	return `${iWant} is what i want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
// }

function withdrawal(account,belopp){
    // OK ELLER INTE
    // nya saldot
}


function getMostPopularProducts(){
    return ["Telefon", "Bil", "Lampa","T-shirt", "Lego"]
}

let  produkterna = getMostPopularProducts()
let [mostPopular,nextMostPopular, nextNextMostPopular, ...allOtherProducts] = produkterna
console.log(mostPopular)
console.log(allOtherProducts)
// let mostPopular = produkterna[0]
// let nextMostPopular = produkterna[1]
// let nextNextMostPopular = produkterna[2]

// let theRest = []



function importantList ({iWant,iDontWant,iNeed}) {
	return `${iWant} is what i want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
}


// let obj = {
//     iWant: 'PS5',
//     iDontWant: 'Sockor',
//     iMustHave: 'Hockeyspel'
// }
let s = importantList({
        iWant: 'PS5',
        iDontWant: 'Sockor',
        iMustHave: 'Hockeyspel'
     })
//let s = importantList('PS5', 'Sockor', 'Hockeyspel')
console.log(s)





