import $ from 'jquery';

export class RootElement {
    constructor(){
        this.element = null; // jQuery object
    }

    appendToElement(el){
        this.createElement();
        el.append(this.element);
    }

    createElement(){
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString(){
        throw 'Override method getElementString() in RootElement class';
    }

}