//given array of objects 


//get array of all names
const names = characters.map((names)=>{
    return names.name
})
console.log(names);

//get array of objects with name and height properties 

const property= characters.map((ch)=>
{
    return {
        name : ch.name,
        height : ch.height
    }
})
console.log(property);

//total height of all characters 

let totHeight= characters.reduce((prev,character)=>{
    return prev+Number(character.height)
},0);
console.log(totHeight);

//mass greater than 100

const greatermass = characters.filter((ch)=>{
    return ch.mass > 100
})
console.log(greatermass)

//get all male characters 

const maleCh = characters.filter((ch)=>{
    return ch.gender ==='male'
})
console.log(maleCh)


//sort by gender

const sortgender = characters.sort((ch1,ch2)=>{
    if(ch1.name < ch2.name){
        return -1;
    }
    if (ch1.name> ch2.name){
        return 1;
    }
    return 0
})

//does every character have mass more than 40?
console.log(
characters.every((character)=>{

    return character.mass > 40;

}))

//blue eyes 

console.log(characters.every((ch)=>{ 
    return ch.eye_color === 'blue';
}))

//is there at least 1 male character ?

console.log(characters.some((ch)=>{
    ch.gender
}))