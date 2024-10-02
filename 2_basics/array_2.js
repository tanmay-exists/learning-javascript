const marvelHeroes = ["thor", "ironman", "spiderman"]
const crHeroes = ["wizard", "megaKnight", "Valkayrie"]
const dcHeroes = ["superman", "flash", "batman"]
marvelHeroes.push(dcHeroes)
console.log(marvelHeroes)
console.log(marvelHeroes[3][1])

const allHeroes = crHeroes.concat(dcHeroes)
console.log(allHeroes)

const crHeroes2 = ["miniPekka", "prince", "hunter"]
const allNewHeroes = [...crHeroes2, ...dcHeroes]    // second way to concatenate
console.log(allNewHeroes)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(1)
console.log(realAnotherArray)
const realAnotherArray2 = anotherArray.flat(2)  // can pass "infinity" in place of 2
console.log(realAnotherArray2)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))