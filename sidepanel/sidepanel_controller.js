function saveEditMode(){
    const tur = model.data.trips.find(trail => {
        return trail.id === model.app.currentTrip;
    });

    const inputs = model.input.tripEditAdd;
    tur.name = inputs.name;
    tur.about = inputs.about;
    tur.location = inputs.location;
    tur.distance = inputs.distance;
    tur.time = inputs.time;
    tur.image = inputs.image;
    tur.season = inputs.season;
    tur.map = inputs.map;
    tur.difficulty = inputs.difficulty;
    tur.parking = inputs.parking;
    tur.walking = inputs.walking;
    tur.wheelchair = inputs.wheelchair;
    tur.bike = inputs.bike;
    tur.google_link = inputs.google_link;

    ToggleEditMode();
}