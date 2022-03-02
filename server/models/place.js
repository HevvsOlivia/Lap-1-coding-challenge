const placesData = require("../data");

class Place {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.language = data.language;
    }

    static get all(){
        const places = placesData.map((place) => new Place(place));
        return places;
    }
}


module.exports = Place;
