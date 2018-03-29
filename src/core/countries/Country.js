
export class Country {
    constructor(name, cities) {
        this._name = name;
        this._cities = cities;
    }

    getName() {
        return this._name;
    }
    getCities() {
        return this._cities;
    }
}
