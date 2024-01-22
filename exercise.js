const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}


function calculateArea({height,width}){
    return height * width
}
let area = calculateArea({
    width:10,
    height:30
})
function calculateArea2(o){
    let {height,width} = o
    return height * width
}
let area2 = calculateArea2({
    width:10,
    height:30
})

    
    

// let o = {
//     width:10,
//     height:30
// }

// let area = calculateArea(o)

let {width,height} = rectangle

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

//Destructure and assign the elements of countries array to fin, est, sw, den, nor

//Destructure the rectangle object by its properties or keys.

// Iterate through the users array and get all the keys of the object using destructuring

// Find the persons who have less than two skills