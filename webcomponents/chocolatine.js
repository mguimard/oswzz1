export default class Chocolatine extends HTMLElement{
    constructor(){
        super()
        console.log('hello from chocolatine')
        this.innerHTML = 'Je suis un pain au chocolat'
        this.onclick = () => {
            this.innerHTML = 'EN fait je suis une poche'
        }
    }
}