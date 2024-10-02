const name = "nigga1"
const repoCount = 50
// ideal method for string concatenation:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('ClashRoyale')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const subGameName = gameName.substring(0,5)
console.log(subGameName)

const slicedGameName = gameName.slice(-8, 6)
console.log(slicedGameName)

const newStringOne = "    nigga   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://nigga.com/nigga%20theGiga"
console.log(url.replace('%20', '-'))
console.log(url.includes('nigga'))
console.log(url.includes('premiumnigga'))
console.log(gameName.split('-'))
console.log(url.split("/"))