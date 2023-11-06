
function tripEdit_toggle(marking) {
    if (marking == 'Parking') {
        model.input.tripEditAdd.parking = !model.input.tripEditAdd.parking;
    }
    else if (marking == 'Walking') {
        model.input.tripEditAdd.walking = !model.input.tripEditAdd.walking;
    }
    else if (marking == 'Wheelchair') {
        model.input.tripEditAdd.wheelchair = !model.input.tripEditAdd.wheelchair;
    }
    else if (marking == 'Bike') {
        model.input.tripEditAdd.bike = !model.input.tripEditAdd.bike;
    }
    viewMarkings_editmode();
}

function img_map_update() {
    const img_map = document.getElementById('img_map');
    const img_file = img_map.files[0];
    let img_srclink = URL.createObjectURL(img_file);
    let src_link_string = '' + URL.createObjectURL(img_file);
    document.getElementById('mapIMG').src = img_srclink;
}

function img_trip_update() {
    const img_trip = document.getElementById('img_trip');
    const img_file = img_trip.files[0];
    let img_srclink = URL.createObjectURL(img_file);
    model.input.tripEditAdd.image.push(img_srclink);
    document.getElementById('tripIMG').src = img_srclink;
}

function ToggleEditMode() {
    model.input.addEdit = !model.input.addEdit;
    const inputs = model.input.tripEditAdd;
    if (model.data.isNew) {
        inputs.name = '';
        inputs.about = '';
        inputs.location = '';
        inputs.distance = '';
        inputs.time = '';
        inputs.image.length = 0;
        inputs.season = '';
        inputs.accessability = '';
        inputs.map = '';
        inputs.difficulty = '';
        inputs.parking = false;
        inputs.walking = false;
        inputs.wheelchair = false;
        inputs.bike = false;
        inputs.google_link = '';
    } else {
        const trip = model.data.trips.find(trail => {
            return trail.id === model.app.currentTrip;
        });
        if (model.input.addEdit) {
            inputs.name = trip.name;
            inputs.about = trip.about;
            inputs.location = trip.location;
            inputs.distance = trip.distance;
            inputs.time = trip.time;
            inputs.image = trip.image;
            inputs.season = trip.season;
            inputs.accessability = trip.accessability;
            inputs.map = trip.map;
            inputs.difficulty = trip.difficulty;
            inputs.parking = trip.parking;
            inputs.walking = trip.walking;
            inputs.wheelchair = trip.wheelchair;
            inputs.bike = trip.bike;
            inputs.google_link = trip.google_link;
        }
    }
    getHTML_turViewMode();
}

function editMode_onChange() {
    model.input.tripEditAdd.name = document.getElementById('trip_name').value;
    model.input.tripEditAdd.location = document.getElementById('trip_location').value;
    model.input.tripEditAdd.accessability = document.getElementById('trip_accessability').value;
    model.input.tripEditAdd.distance = document.getElementById('trip_distance').value;
    model.input.tripEditAdd.time = document.getElementById('trip_time').value;
    model.input.tripEditAdd.season = document.getElementById('trip_season').value;
    model.input.tripEditAdd.difficulty = document.getElementById('trip_difficulty').value;
    model.input.tripEditAdd.about = document.getElementById('trip_about').value;
    model.input.tripEditAdd.google_link = document.getElementById('trip_googleLink').value;
}

function toggleFavorite(tur_id) {
    if (model.app.currentUser.length > 0) {
        const curUser = model.data.users.find(User => {
            return User.username === model.app.currentUser;
        });

        let isFavorite = curUser.favorites.includes(tur_id); //true or false, om tur_id finnes i favorit listet i brukeren

        if (isFavorite)
        {
            let indexOfFavoriteTur = curUser.favorites.findIndex( (fav) => fav == tur_id );
            curUser.favorites.splice(indexOfFavoriteTur, 1);
            getHTML_turViewMode();
            //updateview();
        }
        else 
        {
            curUser.favorites.push(tur_id);
            getHTML_turViewMode();
            //updateview();
        }
    }
}