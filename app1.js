alert('Hello From JS')
// variables here
let account = 0;

// Start here
alert('Welcom to the Landscaper game')
alert('You are starting a landscaping business, but all you have are your teeth.')


//User input

// teeth
for(let counter = 1; counter <= 5; counter++){
    alert('Your balance is $' + account + ' Using just your teeth, you can spend the day cutting lawns and make $1.')
let userInput = prompt("Type 'teeth' to cut the lawn")

if(userInput.toLowerCase() === 'teeth'){
    account+= 1
}else if(userInput.toLowerCase() === 'quit'){
    break;
}
}

//upgrade
alert('You can now buy russty siccors for $5')
let userInput = prompt("Type 'buy' to get Rusty Siccors")
if(userInput.toLowerCase() === 'buy'){
    account = 0
    alert('Your balance is $ ' + account + ' Using the rusty scissors, you can spend the day cutting lawns and make $5.')
}

// rusty siccors


for(let counter = 1; counter <= 5; counter++){
    alert('Your balance is $ ' + account + ' Using the rusty scissors, you can spend the day cutting lawns and make $5.')
userInput = prompt("Type 'cut' to cut the lawn")

if(userInput.toLowerCase() === 'cut'){
    account+= 5
}else if(userInput.toLowerCase() === 'quit'){
    break;
}
}

//upgrade lawnmower
alert('You can now buy a lawnmower for $25.')
userInput = prompt("Type 'buy' to get lawnmower!")
if(userInput.toLowerCase() === 'buy'){
    account = 0
    alert('Your balance is $' + account + ' Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250.')
}

for(let counter = 1; counter <= 5; counter++){
    alert('Your balance is $ ' + account + ' Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50.')
let userInput = prompt("Type 'cut' to cut the lawn")

if(userInput.toLowerCase() === 'cut'){
    account+= 50
}else if(userInput.toLowerCase() === 'quit'){
    break;
}
}

//upgrade battery-lawnmower
alert('You can now buy a battery-powered lawnmower for $250.')
userInput = prompt("Type 'buy' to get  battery-powered lawnmower!")
if(userInput.toLowerCase() === 'buy'){
    account = 0
    alert('Your balance is $' + account + ' Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. If you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500.')
}

for(let counter = 1; counter <= 5; counter++){
    alert('Your balance is $ ' + account + ' Using the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100.')
let userInput = prompt("Type 'cut' to cut the lawn")

if(userInput.toLowerCase() === 'cut'){
    account+= 100
}else if(userInput.toLowerCase() === 'quit'){
    break;
}
}

//upgrade students
alert('You can now hire a team of starving students for $500.')
 userInput = prompt("Type 'buy' to hire a team of starving students for $500!")
if(userInput.toLowerCase() === 'buy'){
    account = 0
    alert('Your balance is $' + account + ' Using the the team of starving students, you can spend the day cutting lawns and make $250. You win the game when you have a team of starving students and $1000. ')
}

for(let counter = 1; counter <= 4; counter++){
    alert('Your balance is $ ' + account + ' Using the the team of starving students, you can spend the day cutting lawns and make $250.')
let userInput = prompt("Type 'cut' to cut the lawn")

if(userInput.toLowerCase() === 'cut'){
    account+= 250
}else if(userInput.toLowerCase() === 'quit'){
    break;
}
}

alert('Congrats you won the game!')











// const userInput = prompt('Who are you?')

// console.log(userInput)

// if(userInput.toLowerCase() === 'abe'){
//     console.log('Welcome Admin')
//  }else {
//         console.log('Who are you')
// }
