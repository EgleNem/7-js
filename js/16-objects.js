/*
OBJECT
{ } - reprezentuoja objeckta
{
    key: value
}


*/
//pamatai

/*Mokiniai ( array ) : 
    -mokinys:
        -vardas (string)
        -pazymiai (array)
        -kontaktinis asmuo :
            -vardas (string)
            -tel nr (number)

*/

/*const students = ['Petras', 'Maryte', 'Jonas', 'Ona',]
console.log(students);
const marks = [[10,8], [10,7,4],[10,6],[10,5],];
const contactName =['P.P', 'M.M', 'J.J', 'O.O',]


const studentIndex =1;
console.log('Vardas:', students[studentIndex]);
console.log('Pazymiai:', marks[studentIndex]);
console.log('Kontaktinio asmens vardas:', contactName[studentIndex]);
console.log('Pazymiai:', marks[studentIndex]);

BLOGAS BUDAS, ISTRYNUS DUOMENIS, MASYVE, PRARANDA TVARKA

*/

const students = [
    {
        name: 'Petras',
        marks: [10, 6],
        contact: {
            name: 'P.P.',
            phone: 111,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Maryte',
        marks: [10, 7],
        contact: {
            name: 'M.M.',
            phone: 222,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Jonas',
        marks: [10, 8],
        contact: {
            name: 'J.J.',
            phone: 333,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Ona',
        marks: [10, 9],
        contact: {
            name: 'P.P.',
            phone: 444,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
];

const studentIndex = 3;
const student = students[studentIndex];
const name = student.name;
const marks = student.marks;
const contactName = student.contact.name;
const contactPhone = student.contact.phone;
const contactCity = student.contact.address.city;

console.log(name);
console.log(marks);
console.log(contactName);
console.log(contactPhone);
console.log(contactCity);