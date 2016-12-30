import { Page } from './page.js';
import { Table } from '../ui/table.js';
import { application } from '../app.js';

export class RestaurantsPage extends Page {
    constructor(){
        super('Рестораны');
    }

    createElement(){
        super.createElement();

        let headers = 'Name, Adress, Photo, Capacity, Cuisine'.split(', ');
        let t = new Table(headers, application.dataService.restaurants);
        t.appendToElement(this.element);
    }

    getElementString(){
        return '<div><h3>Рестораны</h3></div>';
    }
}