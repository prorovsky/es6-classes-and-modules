import { RootElement } from './root-element.js';

export class Image extends RootElement {
    constructor(imgPath){
        super();
        this.imgPath = imgPath;
    }

    getElementString(){
        return `
            <img src="${this.imgPath}"></img>
        `
    }
}