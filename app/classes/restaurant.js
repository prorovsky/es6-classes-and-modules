import { Structure } from './structure.js';

export class Restaurant extends Structure {
    constructor(name,adress, photo, capacity){
        super(name, adress, photo, capacity);
        this.cuisine = null;
    }
}