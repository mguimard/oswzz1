async function jeTePrometQueTuAurasUneChocolatine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Une chocolatine dans une poche')
            } else {
                reject('Voila un pain choc')
            }
        }, 1000)

    })
}

(async () => {

    jeTePrometQueTuAurasUneChocolatine().then(
        (data) => { },
        (e) => { }
    )

    try {
        let result = await jeTePrometQueTuAurasUneChocolatine()
        console.log(result)
    } catch (e) {
        console.log(e)
    }

})()