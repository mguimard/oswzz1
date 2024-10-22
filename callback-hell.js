console.log('hello')

function doSomething(cb) {
    setTimeout(function(){
        cb()
    },1000)
}

doSomething(function(){
    // ...
    console.log(1)
    doSomething(function(){
        // ...
        console.log(2)
        doSomething(function(){
            console.log(3)
        })
    })
})

console.log('Fin de programme')
