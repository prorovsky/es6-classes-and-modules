import { NavBar } from '../ui/nav-bar.js';

export class ApplicationBase {
    constructor(title){
        this.title = title;
        this.navBar = new NavBar(this.title);
        this.routes = {};
        this.defaultRoute = null;
    }

    activateRoute(route){
        let content = this.navBar.element.find('.content');
        content.empty();

        this.routes[route].appendToElement(content);
    }

    addRoute(id, pageObject, defaultRoute = false){
        this.navBar.addLink(id, '');
        this.routes[id] = pageObject;
        if(defaultRoute){
            this.defaultRoute = id;
        }
    }

    show(element){
        this.navBar.appendToElement(element);

        this.navBar.element.find('.navigation-link').click((event) => {
            let route = event.target.innerHTML;
            this.activateRoute(route.trim());
        });
 
        if(this.defaultRoute){
            this.activateRoute(this.defaultRoute);
        }        
    }
}