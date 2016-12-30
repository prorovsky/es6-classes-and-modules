import { Page } from './page.js';
import { Image } from '../ui/image.js';
import { application } from '../app.js';

export class CityPage extends Page {
    constructor(){
        super('Город');
    }

    createElement(){
        super.createElement();

        let i = new Image('../assets/img/city.jpg');
        i.appendToElement(this.element);
        console.log('click');
    }

    getElementString(){
        return '<div style="text-align: center;"></div>';
    }
}