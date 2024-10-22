type Dog = {
    name: string;
    age: number;
    aboie: Function;
}

let d : Dog = {
    name: 'medor',
    age: 1,
    aboie(){

    }
    //pattes : 4
}

interface Cat {
    name : string;
    miaule();
}


const privateFunction = () => {

}

function f2(){

}

export default function square (n:number) : number {
    
    return n * n
}

export function add(a: number, b : number) : number {
    return a + b
}

export function minus(a: number, b : number) : number {
    return a - b
}


function doSomething(x : { pattes: number}) {
    
}