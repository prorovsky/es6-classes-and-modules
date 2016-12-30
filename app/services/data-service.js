import { Restaurant } from '../classes/restaurant.js';
import { Cinema } from '../classes/cinema.js';
import { Error } from './error.js';

export class DataService {
    constructor(){
        this.restaurants = [];
        this.cinemas = [];
        this.errors = [];
    }

    // сортировка входящих данных
    load(places){
        for(let place of places){
            switch(place.type){
                case 'ресторан':
                    // валидация данных ресторана
                    if (this.validateRestaurant(place)){
                        let restaurant = this.loadRestaurant(place);
                        if(restaurant){
                            this.restaurants.push(restaurant);
                        }
                        break;
                    } else {
                        let e = new Error('Ошибка в загрузке ресторана', place);
                        this.errors.push(e);
                    }
                case 'кинотеатр':
                    // валидация данных кинотеатра
                    if(this.validateCinema(place)){
                        let cinema = this.loadCinema(place);
                        if(cinema){
                            this.cinemas.push(cinema);
                        }
                        break;
                    } else {
                        let e = new Error('Ошибка в загрузке кинотеатра', place);
                        this.errors.push(e);
                    }
                default: 
                    let e = new Error('Данные неверны.', place);
                    this.errors.push(e);
                    break;    
            } // end switch
        } // end for loop
    } // end load function

    // загрузка данных ресторана с обработкой ошибок
    loadRestaurant(restaurant){
        try {
            let rest = new Restaurant(restaurant.name, restaurant.adress, restaurant.photo, restaurant.capacity);
            rest.cuisine = restaurant.cuisine;
            return rest;
        } catch(e){
            this.errors.push(new Error('Ошибка в загрузке ресторана', restaurant));
        }
        return null;
    }

    // проверяем правильность данных ресторана
    validateRestaurant(restaurant){
        let requiredFields = 'name, adress, photo, capacity, cuisine'.split(', ');
        let isErrors = false;
        for(let field of requiredFields){
            if(!restaurant[field]){
                let e = new Error(`Отсутствует нужное поле ${field}`, restaurant);
                this.errors.push(e);
                isErrors = true;
            }
        }
        this.isWholePositiveInt(restaurant);
        return !isErrors;
    }

    getRestaurantByCuisine(cuisine){
        return this.restaurants.find(restaurant => {
            return restaurant.cuisine.toLowerCase() === cuisine.toLowerCase();
        });
    }

    restaurantsSortedByCuisine(){
        return this.restaurants.sort((restaurant1, restaurant2) => {
            if(restaurant1.cuisine < restaurant2.cuisine){
                return -1;
            }
            if(restaurant1.cuisine > restaurant2.cuisine){
                return 1;
            }
            return 0;
        });
    }

    // фильтрация по названию
    filterRestaurantByName(search){
        return this.restaurants.filter(restaurant => restaurant.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    }

    // загрузка данных ресторана с обработкой ошибок
    loadCinema(cinema){
        try {
            let cin = new Cinema(cinema.name, cinema.adress, cinema.photo, cinema.capacity);
            cin.genres = cinema.genres;
            return cin;
        } catch(e){
            this.errors.push(new Error('Ошибка в загрузке кинотеатра', cinema));
        }
        return null;
    }

    // проверяем правильность данных ресторана
    validateCinema(cinema){
        let requiredFields = 'name, adress, photo, capacity, genres'.split(', ');
        let isErrors = false;
        for(let field of requiredFields){
            if(!cinema[field]){
                let e = new Error(`Отсутствует нужное поле ${field}`, cinema);
                this.errors.push(e);
                isErrors = true;
            }
        }
        this.isWholePositiveInt(cinema);
        return !isErrors;
    }

    getCinemaByGenre(genres){
        return this.cinemas.find(cinema => {
            return cinema.genres.toLowerCase() === genres.toLowerCase();
        });
    }

    cinemasSortedByGenre(){
        return this.cinemas.sort((cinema1, cinema2) => {
            if(cinema1.genres < cinema2.genres){
                return -1;
            }
            if(cinema1.genres > cinema2.genres){
                return 1;
            }
            return 0;
        });
    }

    // фильтрация по названию
    filterCinemaByName(search){
        return this.cinemas.filter(cinema => cinema.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    }

    // хелпер для валидации capacity
    isWholePositiveInt(place){
        let isErrors = false;
        if(Number.isNaN(place.capacity) || place.capacity <= 0 || !Number.isInteger(place.capacity)){
            this.errors.push(new Error('Поле "вместимость" должно быть целым и больше нуля числом'));
            isErrors = true;
        }
    }

}