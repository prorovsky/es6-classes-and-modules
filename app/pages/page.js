import { RootElement } from '../ui/root-element.js';

export class Page extends RootElement {
    constructor(pageTitle){
        super();
        this.pageTitle = pageTitle;
    }
}