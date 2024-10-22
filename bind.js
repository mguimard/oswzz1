class Animal {
    avance(a,b){
        console.log(this)
        console.log(typeof this)
    }
}

let medor = new Animal
medor.avance()

let fn = medor.avance.bind(123)
fn()

medor.avance.apply('alice', 'arg1','arg2')