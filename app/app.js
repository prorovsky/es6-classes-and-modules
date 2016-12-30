import $ from 'jquery';
import { places } from './list-of-places.js';
import { DataService } from './services/data-service.js';
import { ApplicationBase } from './framework/application-base.js';
import { CityPage } from './pages/city-page.js';
import { RestaurantsPage } from './pages/restaurants-page.js';

export class App extends ApplicationBase {
    constructor(){
        super('Город');
        this.dataService = new DataService();
        this.dataService.load(places);

        // routes
        this.addRoute('Город', new CityPage(), true)
        this.addRoute('Рестораны', new RestaurantsPage());
        this.addRoute('Кинотеатры', null);
    }
}

export let application = new App();
application.show($('body'));