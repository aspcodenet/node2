const {players,bestJersey} = require('./players.js')
console.log(bestJersey)
console.log(players)


const express = require('express')
const app = express()
const fs = require('fs');
const ejs = require('ejs')
const port = 3000
app.set('view engine','ejs')
//const testFolder = 'c:\\temp';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('Don’t contact us at all!<h1>Hej</h1>')
})


app.get('/playersjson',(req,res)=>{
    const test = [
        {namn:"Foppa",jersey:21, team:"Colorado"},
        {namn:"Sudden",jersey:13, team:"Toronto"}
    ]
    res.json(test)
})


app.get('/players',(req,res)=>{
    let  discount = 1 // Vi läser från databas - vi kollar veckodag osv
    //if day == tuesday discount 5

    res.render('players',{
        todaysDiscount: discount,
        players:players
    })    

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





