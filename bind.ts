class Animal2 {
    avance(){
        console.log(this)
        console.log(typeof this)
    }
}

let medor2 = new Animal2
medor2.avance()

let fn2 = medor2.avance.bind(123)
fn2()

medor2.avance.apply( 'alice', ['arg1','arg2'])