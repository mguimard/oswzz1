let dog = {
    name: 'medor'
}

console.log(typeof dog)

class Dog {
    constructor(){

    }
    aboie(){
        console.log('wouf')
    }
}

let medor = new Dog()

console.log(typeof medor)
console.log(medor instanceof Dog)

function faireAboyer(chien) {
    if(chien instanceof Dog)
        chien.aboie()
    else throw Error("c'est pas un Dog")
}

faireAboyer(dog)
faireAboyer(medor)

faireAboyer(1,2,3)