import { RootElement } from './root-element.js';

export class NavBar extends RootElement {
    constructor(title){
        super();
        this.title = title;
        this.links = [];
    }

    addLink(title, url){
        this.links.push({
            title,
            url
        })
    }

    // <li role="presentation" class="active"><a href="index.html">${this.title}</a></li>

    getElementString(){
        let links = '';
        for(let link of this.links){
            links += `<li class="navigation-link" role="presentation"><a>${link.title}</a></li>`
        }

        return `
            <ul class="nav nav-pills">
                ${links}
            </ul>
            <div class="content">

            </div>
        `
    }
}