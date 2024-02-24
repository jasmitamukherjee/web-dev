

//area of square

let square = {
    side : 5,
    get area(){
        // return this.side * this.side;
        return this.side ** 2;
    }
}

square.side= 10;
console.log(square.area)

//join function without using join

function stringConcat(separator, ...strings){
    let returnval= ""
     strings.forEach((string,i)=>{
        if(i == strings.length-1) {
            returnval+=string;
        }
        else
        {returnval += string + separator;}
     })
     return returnval;
}

console.log(stringConcat('+','Jasmita','Mukherjee'))

//array destructuring

let [first,second,third,...others]=[1,2,3,4,5,6,7,8,9,10]
console.log(first)
console.log(others)


//match stick problems

function match(num)
{
    if(num<=0)
    return 0;
else{
return num*6 - num + 1;
}
}

console.log(match(4))