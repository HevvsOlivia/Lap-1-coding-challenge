const placesData = require("../data");

class Place {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.language = data.language;
    }

    static get all() {
        const places = placesData.map((place) => new Place(place));
        return places;
    }


    static findById(id) {
        try {
            const placeData = placesData.find((place) => place.id === id)[0];
            const place = new Place(placeData);
            return place
        } catch(e) {
            throw new Error("This place does not exist")
        }
        
    }

    static getRandomPlace(places) {
        const randomId = Math.floor(Math.random() * places.length);
        return places[randomId];
    }

}


    module.exports = Place;
