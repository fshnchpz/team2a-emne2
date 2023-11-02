
"use strict"

function turView_openCard(card_id)
{
    const trip = model.data.trips.find(trail =>
    {
        return trail.id === card_id;
    });

    model.app.currentTrip = card_id;
    getHTML_turViewMode();
}

function getHTML_turViewMode()
{
    let HTML = ``;

    model.app.sidepanel_mode = 'turView';

    //Hent ingenting hvis en tur ikke er valgt
    if (model.app.currentTrip === null)
    {
        return;
    }

    const trip = model.data.trips.find(trail =>
    {
        return trail.id === model.app.currentTrip;
    });

    let isFavorite = false;

    if (model.app.currentUser.length > 0)
    {
        const curUser = model.data.users.find(User =>
        {
            return User.username === model.app.currentUser;
        });

        if (curUser.favorites.includes(trip.id))
        {
            isFavorite = true;
        }
    } else
    {
        isFavorite = false;
    }

    if (!model.input.addEdit)
    {
        HTML = /*HTML*/`
    <div class="tur_Container">
        ${viewSidePanel()}
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
    } else if (model.input.addEdit)
    {
        HTML = /*HTML*/`
            <div class="tur_Container">
            ${viewSidePanel()}
            <div class="tur_Page">
                <div class="tur_Image">${getTripIMG()}</div>
                <div class="tur_ImageUpload">
                    <label for="img_trip" class="input_tripImg">Last opp bilder</label>
                    <input type="file" id="img_trip" name="img_trip" accept=".jpg,.png,.bmp,.jpeg" style="opacity: 0; display: none;" onChange="img_trip_update()" />
                </div>
                
                <input type="text" id="trip_name" placeholder="Tur navn" class="tur_Name" value="${model.input.tripEditAdd.name}"/>

                <div class="tur_Data">
                    <div class="left">

                        <div class="tur_OmTur">
                            <div class="text">Om turen</div>
                        </div>

                        <div class="details">
                            <div class="data_field">
                                <div class="icon location"></div>
                                <input type="text" id="trip_location" placeholder="Fylke/by & adresse" class="text" value="${model.input.tripEditAdd.location}" onchange="model.input.tripEditAdd.location = this.value" />
                            </div>
                            <div class="data_field">
                                <div class="icon tur_type"></div>
                                <input type="text" id="trip_accessability" placeholder="Type tur, fra A til B" class="text" value="${model.input.tripEditAdd.accessability}" onchange="model.input.tripEditAdd.accessability = this.value" />
                            </div>
                            <div class="data_field">
                                <div class="icon measurement"></div>
                                <input type="number" id="trip_distance" placeholder="Distanse (km)" class="text" value="${model.input.tripEditAdd.distance}" onchange="model.input.tripEditAdd.distance = this.value" />
                            </div>
                            <div class="data_field">
                                <div class="icon timeclock"></div>
                                <input type="number" id="trip_time" placeholder="Tid (minutter)" class="text" value="${model.input.tripEditAdd.time}" onchange="model.input.tripEditAdd.time = this.value" />
                            </div>
                            <div class="data_field">
                                <div class="icon calender"></div>
                                <input type="text" id="trip_season" placeholder="Sesong fra: (f.eks: Januar - Februar)" class="text" value="${model.input.tripEditAdd.season}" onchange="model.input.tripEditAdd.season = this.value" />
                            </div>
                            <div class="data_field">
                                <div class="icon intensity"></div>
                                <input type="number" id="trip_difficulty" placeholder="Vanskelighets grad (1-10)" class="text" value="${model.input.tripEditAdd.difficulty}" min=1 max=10 onchange="model.input.tripEditAdd.difficulty = this.value" />
                            </div>
                        </div>

                        <div class="description">
                            <div class="title">Beskrivelse</div>
                            <textarea type="text" id="trip_about" placeholder="Beskrivelse på turen og diverse informasjon" class="text" value="asdasdasd" rows=10 cols=1 onchange="model.input.tripEditAdd.about = this.innerHTML">${model.input.tripEditAdd.about}</textarea>
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
                            <div class="map_image" id="map_image">${getMapIMG()}</div>
                            <label for="img_map" class="input_mapImg">Last opp bilde av tur ruten</label>
                            <input type="file" id="img_map" name="img_map" accept=".jpg,.png,.bmp,.jpeg" style="opacity: 0" onChange="img_map_update()" />
                            <input type="text" id="trip_googleLink" placeholder="Lenke til Google Maps" class="input_googlelink" value="${model.input.tripEditAdd.google_link}" />
                        </div>

                        
                        <div class="markings">
                            <div class="marking_title">Merker</div>
                            <div id="marking_box" class="marking_box">
                                <div class="squarebtn ${model.input.tripEditAdd.parking ? 'active' : ''}" onClick="tripEdit_toggle('Parking')"><img src="../images/Local_Parking_Icon_8.png"/></div>
                                <div class="squarebtn ${model.input.tripEditAdd.walking ? 'active' : ''}" onClick="tripEdit_toggle('Walking')"><img src="../images/Directions_Walk_Icon_2.png"/></div>
                                <div class="squarebtn ${model.input.tripEditAdd.wheelchair ? 'active' : ''}" onClick="tripEdit_toggle('Wheelchair')"><img src="../images/Accessible_Icon_8.png"/></div>
                                <div class="squarebtn ${model.input.tripEditAdd.bike ? 'active' : ''}" onClick="tripEdit_toggle('Bike')"><img src="../images/Directions_Bike_Icon_1.png"/></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById('app').innerHTML = HTML;
}


function getMapIMG()
{
    const trip = model.data.trips.find(trail =>
    {
        return trail.id === model.app.currentTrip;
    });
    if (trip.map != '')
    {
        return `<img id="mapIMG" class="mapIMG" src="${trip.map}"/>`;
    }
    else
    {
        return '';
    }
}

function getTripIMG()
{
    const trip = model.data.trips.find(trail =>
    {
        return trail.id === model.app.currentTrip;
    });
    if (trip.image.length > 0)
    {
        return `<img id="tripIMG" class="tripIMG" src="${trip.image[0]}"/>`;
    }
    else
    {
        return '';
    }
}

function viewMarkings_editmode()
{
    document.getElementById('marking_box').innerHTML = `
        <div class="squarebtn ${model.input.tripEditAdd.parking ? 'active' : ''}" onClick="tripEdit_toggle('Parking')"><img src="../images/Local_Parking_Icon_8.png"/></div>
        <div class="squarebtn ${model.input.tripEditAdd.walking ? 'active' : ''}" onClick="tripEdit_toggle('Walking')"><img src="../images/Directions_Walk_Icon_2.png"/></div>
        <div class="squarebtn ${model.input.tripEditAdd.wheelchair ? 'active' : ''}" onClick="tripEdit_toggle('Wheelchair')"><img src="../images/Accessible_Icon_8.png"/></div>
        <div class="squarebtn ${model.input.tripEditAdd.bike ? 'active' : ''}" onClick="tripEdit_toggle('Bike')"><img src="../images/Directions_Bike_Icon_1.png"/></div>
    `;
}

function view_imgMap_edit()
{
    document.getElementById('map_image').innerHTML = `<img id="mapIMG" class="mapIMG" src="${model.input.tripEditAdd.map}" />`;
}