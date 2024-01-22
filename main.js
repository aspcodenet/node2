const {players,bestJersey} = require('./players.js')
console.log(bestJersey)
console.log(players)


const express = require('express')
const app = express()
const fs = require('fs');
const port = 3000
//const testFolder = 'c:\\temp';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('Don’t contact us at all!')
})

// app.get('/listing', (req, res) => {
// 	result = '';
// 	fs.readdirSync(testFolder).forEach(file => {
// 	  result += file + '<br/>'
// 	});
//   	res.send(result)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




//console.log()
// console.log(global)
// let x = 12
// console.log('Hejsan' + x)

// console.log(__dirname);
// console.log(__filename)



// let player = {
//     name: "Stefan",
//     jersey:2
// }

// console.log(player)


// player.team = "Toronto"

// console.log(player)


// global.namnet = "Stefan"

// console.log(global)





