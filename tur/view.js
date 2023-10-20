
"use strict"

function getHTML_turViewMode() {
    let HTML = ``;


    //Hent ingenting hvis en tur ikke er valgt
    if (model.app.currentTrip === null) {
        return;
    }

    const trip = model.data.trips[model.app.currentTrip];
    let isFavorite = false;
    const curUser = model.data.users.find(User => {
        return User.name === model.app.currentUser;
    });


    if (curUser.favorites.includes(trip.id)) {
        isFavorite = true;
    }

    HTML = /*HTML*/`
        <div class="tur_Container">
        <div class="tur_Page">
            <div class="tur_Image">${getTripIMG()}</div>
            <div class="tur_Name">${trip.name}</div>

            <div class="tur_Data">
                <div class="left">

                    <div class="tur_OmTur">
                        <div class="text">Om turen</div>
                        <div class="${isFavorite ? 'isFavorite' : 'favorite'}"></div>
                    </div>

                    <div class="details">
                        <div class="data_field">
                            <div class="icon location"></div>
                            <div class="text">${trip.location}</div>
                        </div>
                        <div class="data_field">
                            <div class="icon tur_type"></div>
                            <div class="text">${trip.accessability}</div>
                        </div>
                        <div class="data_field">
                            <div class="icon measurement"></div>
                            <div class="text">${trip.distance} km</div>
                        </div>
                        <div class="data_field">
                            <div class="icon timeclock"></div>
                            <div class="text">${trip.time} minutter</div>
                        </div>
                        <div class="data_field">
                            <div class="icon calender"></div>
                            <div class="text">Sesong fra: ${trip.season}</div>
                        </div>
                        <div class="data_field">
                            <div class="icon intensity"></div>
                            <div class="text">Vanskelighet grad: ${trip.difficulty}</div>
                        </div>
                    </div>

                    <div class="description">
                        <div class="title">Beskrivelse</div>
                        <div class="text"><span>${trip.about}</span></div>
                    </div>

                    <!-- Unøvdvendig, har ingen sted i modell til å lagre eller laste dette
                    <div class="extrainfo">
                        <div class="extrainfo_title">Adkomst og parkering</div>
                        <div class="extrainfo_box">
                            <div class="title">Adkomst med egen bil</div>
                            <div class="text">Fra garasjen, rygg bakover og ødelegg rumpa på bilen. Også ta venstre svingen på fjellet og kjør rett ned stupet. Hvis du har lappen...</div>
                        </div>
                    </div>
                    -->

                </div>
                <div class="divider"></div>
                <div class="right">

                    <div class="map">
                        <div class="map_image">${getMapIMG()}</div>
                        <a href="${trip.google_link}" target="_blank" class="button green">Gå til Google Maps</a>
                    </div>

                    
                    <div class="markings">
                        <div class="marking_title">Merker</div>
                        <div class="marking_box">
                            <div class="squarebtn ${trip.parking ? 'active' : ''}"><img src="../images/Local_Parking_Icon_8.png"/></div>
                            <div class="squarebtn ${trip.walking ? 'active' : ''}"><img src="../images/Directions_Walk_Icon_2.png"/></div>
                            <div class="squarebtn ${trip.wheelchair ? 'active' : ''}"><img src="../images/Accessible_Icon_8.png"/></div>
                            <div class="squarebtn ${trip.bike ? 'active' : ''}"><img src="../images/Directions_Bike_Icon_1.png"/></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    `; 

    document.getElementById('app').innerHTML = HTML;
}

function dataExample_generate() {
    model.app.currentTrip = 0;
    model.app.currentUser= 'testnavn1';

    //nye modell properties:
    // google_link: '',    //googlemap link

    let testTrip = {
        id: 0,
        name: 'Valleråsen',
        about: `Blåmerket sti starter rett inn ved Jernbaneundergangen like nord for parkeringa, bak bygget til Misjon uten grenser. Her inne står en informasjonstavle med kartoversikt over løypemuligheter og ulike severdigheter innover i marka. Den første delen av løypa - opp lia - følger starten på den gamle presteveien mot Siljan, gjennom Bjørkedalen.

        Et greit og fint terreng, men enkelte bratte lier med noe steinete underlag, må man beregne på turen. Ellers mye bra og god sti. På en liten del av løypa forekommer enkelte bløte partier, men dette er minimalt.
        
        Nå du har gått ca 1,2 km kommer du til et stidele. Denne stien går mot venstre, sammen med stien til Vannverket. Stien er godt merket og skiltet. Hele turen er på ca 2,2 km og tar ca en time.`,
        location: 'Vestfold og Telemark, Porsgrunn',
        distance: 2.2,        //number
        time: 60,            //number
        image: 'https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/vgpssg7fmfqmro2whsm1',          //src/link
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
    model.data.trips = [];
    model.data.trips.push(testTrip);
}

function getMapIMG() {
    const trip = model.data.trips[model.app.currentTrip];
    if (trip.map != '') {
        return `<img class="mapIMG" src="${trip.map}"/>`;
    }
    else {
        return '';
    }
}
function getTripIMG() {
    const trip = model.data.trips[model.app.currentTrip];
    if (trip.image != '') {
        return `<img class="tripIMG" src="${trip.image}"/>`;
    }
    else {
        return '';
    }
}