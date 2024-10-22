export default class Box<T> {
    value: T
    constructor(value: T){
        this.value = value
    }

    private f(){}

    get() : T {
        return this.value
    }
}