const arr=[1,2,3,4];
console.log(arr);
console.log(arr.length);
const num = new Array(8,9,10);
console.log(num);

num.push(11);

num.unshift(0);

console.log(arr.pop());

num.shift();

num[0]=100;
console.log(num)
num[3]='Jasmita'
console.log(num)

const names = ['Jasmita','Adarsh','Himanshi','Aditi','Adarsh'];
console.log(names.indexOf('Adarsh',3));
console.log(names.lastIndexOf('Adarsh'));

console.log(names.includes('Jasmita',2));
console.log(names.includes('Jasmita'));

let channels = [
    {
        name: 'Jasmita Mukherjee',
        subscriber : 1000

    },
    {
        name : 'Adarsh Thazhathethil',
        subscriber : 2000
    },
    {
        name : 'Ujani Mukherjee',
        subscriber : 3000
    }
];
console.log(channels.find(function(element){
    return element.subscriber === 2000
}))

console.log(channels.find(element=>{
    return element.name === 'Jasmita Mukherjee'
}))

 let names1= ['Jasmita','Adarsh','Himanshi','Aditi','Adarsh'];
 let names2= ['Himanshi','Aditi','Adarsh'];
// let names3 = names1.concat(names2);
//  console.log(names1.concat(names2));

//  console.log(names3.slice(3,5))

let names3= [...names1,...names2]
console.log(names3)


//for loop

for(let i =0;i<names.length;i++){
    console.log(names[i])
}

for(let name of names){
    console.log(name)
}

//for-each

names.forEach(function(name,index){
    console.log(name,index)
})


//join

let student=['S','H','I','V','A']
console.log(student.join())
console.log(student.join(''))

student=student.join('_')

//split
console.log(student.split('_'))

//filter method
let cities = [
    {
        name : 'Mumbai',
        population : 456789
    },
    {
        name : 'Delhi',
        population : 782135
    },
    {
        name : 'Bangalore',
        population : 852963
    },
    {
        name : 'Chennai',
        population : 222583
    },
    {
        name : 'Lucknow',
        population : 45678
    }
    


];

console.log(cities.filter(city=>{
    return city.population > 400000
}))

// console.log(channels.find(function(element){
//     return element.subscriber > 1000
// }))



//map method
console.log(cities.map(city=> city.population * 2))



