const setupFn = {}

export function defineComponents(classList) {
    for(let c of classList){
        console.log('defining ' + c.name)

        setupFn[c.name] = function() {
            this.shadow = this.attachShadow({mode:'open'})

            let templateEL = document.createElement('template')
            templateEL.innerHTML = c.template
            let templateContent = templateEL.content
            let node = templateContent.cloneNode(true)
           
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(c.styles);
            this.shadow.adoptedStyleSheets = [sheet];

            this.shadow.appendChild(node)
        }
    
        customElements.define(c.selector, c)
    }
}

export class Component extends HTMLElement {
    constructor(){
        super()
        console.log('new Component instance' , this.constructor.name)
        setupFn[this.constructor.name].bind(this)()
    }

}