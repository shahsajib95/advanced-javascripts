const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 41, name: 'Manna'},
    {id: 71, name: 'Deepjol'},
];

const names= student.map(s=>s.name);
console.log(names);
const ids = student.map(s=> s.id);
console.log(ids);
const bigger = student.filter( s => s.id > 40);
console.log(bigger);
// for(const i = 0; i > student.length; i++ ){
//     const element = student[i];
//     console.log(element);
// }