
function dataExample_generate() {
    model.input.addEdit = false;

    //nye modell properties:
    // google_link: '',    //googlemap link

    let testTrip = {
        id: 11,
        name: 'Valleråsen',
        about: `Blåmerket sti starter rett inn ved Jernbaneundergangen like nord for parkeringa, bak bygget til Misjon uten grenser. Her inne står en informasjonstavle med kartoversikt over løypemuligheter og ulike severdigheter innover i marka. Den første delen av løypa - opp lia - følger starten på den gamle presteveien mot Siljan, gjennom Bjørkedalen.

        Et greit og fint terreng, men enkelte bratte lier med noe steinete underlag, må man beregne på turen. Ellers mye bra og god sti. På en liten del av løypa forekommer enkelte bløte partier, men dette er minimalt.
        
        Nå du har gått ca 1,2 km kommer du til et stidele. Denne stien går mot venstre, sammen med stien til Vannverket. Stien er godt merket og skiltet. Hele turen er på ca 2,2 km og tar ca en time.`,
        location: 'Telemark & Vestfold, Porsgrunn',
        distance: 2.2,        //number
        time: 60,            //number
        image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/vgpssg7fmfqmro2whsm1'],          //src/link
        season: 'April - November',
        accessability: 'Enkel fottur, går en veg fra A til B',
        map: '../images/turmap1.png',            //src/link
        google_link: 'https://www.google.com/maps/dir//59.124754239,9.705845732',    //googlemap link
        difficulty: 4,      //number
        parking: true,         //boolean
        walking: true,        //boolean
        wheelchair: false,      //boolean
        bike: false,           //boolean
        creator: 'admin',
        approved: true,
    };
    model.data.trips.unshift(testTrip);
}

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
    model.input.tripEditAdd.map = document.getElementById('mapIMG').src;

}
function img_trip_update() {
    const img_trip = document.getElementById('img_trip');
    const img_file = img_trip.files[0];
    let img_srclink = URL.createObjectURL(img_file);
    document.getElementById('tripIMG').src = img_srclink;
    model.input.tripEditAdd.image = document.getElementById('tripIMG').src;

}

function ToggleEditMode() {
    model.input.addEdit = !model.input.addEdit;

    const trip = model.data.trips.find(trail => {
        return trail.id === model.app.currentTrip;
    });
    const inputs = model.input.tripEditAdd;

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
}