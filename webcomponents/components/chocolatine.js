import {Component} from "../lib/my-framework.js"

export default class Chocolatine extends Component{
    static selector = 'my-chocolatine'
    static template = '<p>Je suis un pain chocolat</p>'
    static styles = `p {color: blue}`
}