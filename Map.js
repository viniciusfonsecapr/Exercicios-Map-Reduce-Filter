/* 

    MAP 
        -  Cria um novo array, a partir  do array percorrido (array original)
        -  Cria um novo array, com a mesma quantida de itens do array original
        - Aceita 3 parâmetros
            - Item do array
            - index
            - Array compeleto
*/

const list = [

    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },

];

const newList = list.map( client => {

    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? "Black" : "Green"
    }
    return newList

})

console.log(newList)


const students = [

    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade:  8},
    { name: "Bruno", testGrade:  9},
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade:  2},
    { name: "Julio", testGrade: 10 },

];

const aprrovedStudents = students.map( student => {
    let approvedOrNot 
    if(student.testGrade >= 7){
        approvedOrNot = "Approved"
    } else {
        approvedOrNot = "Disapproved"
    }
    const students = {
        name: student.name,
        finalResult: approvedOrNot
    }

    return students

})

console.log(aprrovedStudents)