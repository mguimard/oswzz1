async function delay  (ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms)
    })
}

(async () => {
    delay(5000).then(() => {
        console.log('Hello')
    })
    await delay(1000)
    console.log(1)
    await delay(500)
    console.log(2)
    await delay(1000)
    console.log(3)
})()