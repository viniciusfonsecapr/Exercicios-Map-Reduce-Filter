/* 

    FILTER 
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parâmetros 
        -item do array
        -index
        -array completo

*/ 

/*
const list = [

    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },

];

const justVips = list.filter( cliente => cliente.vip )

console.log(justVips)

ou

const justVips = list.filter( cliente => {
 return cliente.vip 

})

console.log(justVips)

/////////////////////////////////////////////////////////


const students = [

    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade:  8},
    { name: "Bruno", testGrade:  9},
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade:  2},
    { name: "Julio", testGrade: 10 },

];

const newList = students.filter( students => {

     return students.testGrade >= 7


})

console.log(newList)


*/
// EXERCICOS FILTER 

const list = [20,3,234,12,17,541,6,87,275,1000]; /// APENAS os numeros pares e divisiveis por 5. 

const newList = list.filter( number => {
    if(number % 2 !== 0) return false
    if(number % 5 !== 0 ) return false
    
    return true
})

// console.log(newList)

/////////////////////////////////////////////////////////////

const companies = [
    { name:'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn:1938},
    { name:'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn:1975},
    { name:'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn:1968},
    { name:'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn:2004},
    { name:'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn:2006},
    { name:'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn:1976},
];

const newCompanies = companies.filter( nCompanies => {

    if(nCompanies.foundedOn <= 1975) return false
    if(nCompanies.marketValue <= 200) return false
    else return true

})

console.log(newCompanies)