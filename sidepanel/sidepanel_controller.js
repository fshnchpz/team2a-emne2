function saveEditMode() {
    const inputs = model.input.tripEditAdd;
    
    if (model.data.isNew) {
        let i = 0;
        while (model.data.trips.some((trip) => trip.id === i)) {
            i++;
        };
        let returnId = i;
        const curUser = model.data.users.find(User => {
            return User.username === model.app.currentUser;
        });
        curUser.myTrips.push(i);
        const newTrip = {
            id: returnId,
            name: inputs.name,
            about: inputs.about,
            accessability: inputs.accessability,
            location: inputs.location,
            distance: inputs.distance,
            time: inputs.time,
            image: inputs.image,
            season: inputs.season,
            map: inputs.map,
            difficulty: inputs.difficulty,
            parking: inputs.parking,
            walking: inputs.walking,
            wheelchair: inputs.wheelchair,
            bike: inputs.bike,
            google_link: inputs.google_link,
        };
        model.data.trips.push(newTrip);
        goToSite('profile');
        model.data.isNew = false;
    } else {
        const tur = model.data.trips.find(trail => {
            return trail.id === model.app.currentTrip;
        });
        tur.name = inputs.name;
        tur.about = inputs.about;
        tur.accessability = inputs.accessability;
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
}