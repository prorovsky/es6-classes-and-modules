import { Structure } from './structure.js';

export class Cinema extends Structure {
    constructor(name, adress, photo, capacity){
        super(name, adress, photo, capacity);
        this.genres = null;
    }
}