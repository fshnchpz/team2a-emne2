"use strict";
const data = model.data.trips;
let tur_card_max = 9;
let tur_cardPage = 0;

function viewTrails()
{ //dette viser alle turene som kort

    model.app.sidepanel_mode = 'trails';
    const filterEnabled = model.input.sorting.enabled;

    let html = /*html*/ `
    ${viewSidePanel()}

    <div class="cardContainer">
        <div class="grid">
    `;

    // Karusellen for tur kort
    if (!filterEnabled) 
    {
        if (data.length >= tur_card_max + (tur_card_max * tur_cardPage))
        {
            for (let tur_id = (tur_card_max * tur_cardPage); tur_id < (tur_card_max + (tur_card_max * tur_cardPage)); tur_id++)
            {
                html += getTrailCard(tur_id);
            }
        }
        else
        {
            for (let tur_id = (tur_card_max * tur_cardPage); tur_id < data.length; tur_id++)
            {
                html += getTrailCard(tur_id);
            }
        }
    }
    else { // Hvis filter er på, så skal det kun vise kort som stemmer med filter

        for (let tur of model.input.sorting.trips) {
            html += getTrailCard(tur.id);
        }
    }

    html += /*html*/`
        </div>
        <div class="carousel_container">
            <div class="arrow" onclick="carousel_previous()">◄</div>
            ${showPageNumber()}
            <div class="arrow" onclick="carousel_next()">►</div>
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}

function showPageNumber()
{
    let pageCounter = Math.ceil(data.length / tur_card_max);
    let pageNumber = '';
    for (let i = 0; i < pageCounter; i++)
    {
        pageNumber += /*HTML*/`
            <div class="circle ${i == tur_cardPage ? 'green':''}" onclick="goCardPage(${i})">${i + 1}</div>
        `;
    }
    return pageNumber;
}

function goCardPage(page) {
    tur_cardPage = page;
    updateview();
}

function getTrailCard(tur_id)
{ //dette viser et kort om gangen

    const trip = data.find(trail => {
        return trail.id === tur_id;
    });

    let isFavorite = false;
    if (model.app.currentUser.length > 0) {
        const curUser = model.data.users.find(User => {
            return User.username === model.app.currentUser;
        });

        if (curUser.favorites.includes(trip.id)) {
            isFavorite = true;
        }
    }

    let html = /*html*/ `
        <div class="card" onClick="turView_openCard(${trip.id})">
            ${trip.image.length === 0 ? `<div class="prev_image" style="background: url('https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg') no-repeat; background-size: 100% auto;">` : `<div class="prev_image" style="background: url('${trip.image[0]}') no-repeat; background-size: 100% auto;">`}
                <div class="favIco"><img src="${isFavorite ? '../images/Star_4_yellow.png' : '../images/Star_4.png'}" class="star"/></div>
            </div>
            <div class="card_location">
                <div class="municipality">${trip.location}</div>
            </div>
            <div class="card_data">
                <div class="name">${trip.name}</div>
                <div class="distance"><img class="card_icons" src="../images/Square_Foot_Icon_4.png"/>${trip.distance} km</div>
                <div class="time"><img class="card_icons" src="../images/Watch_Later_Icon_4.png"/>${timeConvert(trip.time)}</div>
            </div>
            <div class="card_markings">${iconsLoop(trip)}</div>
        </div>
        `;
    return html;
}

function timeConvert(minutes)
{
    let Text = ``;
    let data_Hours = 0;
    let data_Minutes = 0;
    if (minutes >= 60)
    {
        data_Hours = Math.floor(minutes / 60);
        data_Minutes = minutes - (60 * data_Hours);
    }
    if (data_Hours > 0)
    {
        Text = `${data_Hours} Timer`;

        if (data_Hours == 1)
        {
            Text = `${data_Hours} Time`;
        }
        if (data_Minutes > 0)
        {
            Text += ` & ${data_Minutes} minutter`;
        }
    }
    else
    {
        Text = `${minutes} minutter`;
    }


    return Text;
}

function iconsLoop(tur)
{
    let html = ``;

    if (tur.parking)
    {
        html += `<img class="card_markingStyle" src="../images/Local_Parking_Icon_8.png"/>`;
    }
    if (tur.walking)
    {
        html += `<img class="card_markingStyle" src="../images/Directions_Walk_Icon_2.png"/>`;
    }
    if (tur.wheelchair)
    {
        html += `<img class="card_markingStyle" src="../images/Accessible_Icon_8.png"/>`;
    }
    if (tur.bike)
    {
        html += `<img class="card_markingStyle" src="../images/Directions_Bike_Icon_1.png"/>`;
    }
    return html;
}

function carousel_next() {
    let maxPages = Math.floor(data.length / tur_card_max);
    let page = tur_cardPage;

    if (tur_cardPage == maxPages) {
        page = 0;
    } else {
        page++;
    }

    goCardPage(page);
}

function carousel_previous() {
    let maxPages = Math.floor(data.length / tur_card_max);
    let page = tur_cardPage;

    if (tur_cardPage == 0) {
        page = maxPages;
    } else {
        page--;
    }

    goCardPage(page);
}

function filterChanged() {
    const input_Parkering = document.getElementById('Parkering').checked;
    const input_Fottur = document.getElementById('Fottur').checked;
    const input_Sykkel = document.getElementById('Sykkel').checked;
    const input_Rullestol = document.getElementById('Rullestol').checked;

    if (input_Parkering) {
        model.input.sorting.parking = true;
    } else {
        model.input.sorting.parking = false;
    }
    if (input_Fottur) {
        model.input.sorting.walking = true;
    } else {
        model.input.sorting.walking = false;
    }
    if (input_Sykkel) {
        model.input.sorting.bike = true;
    } else {
        model.input.sorting.bike = false;
    }
    if (input_Rullestol) {
        model.input.sorting.wheelchair = true;
    } else {
        model.input.sorting.wheelchair = false;
    }

    filterUpdate();
}



function filterUpdate() {
    const sorting = model.input.sorting;
    sorting.trips = [];

    
    const input_Parkering = model.input.sorting.parking;
    const input_Fottur = model.input.sorting.walking;
    const input_Sykkel = model.input.sorting.bike;
    const input_Rullestol = model.input.sorting.wheelchair;

    //model.input.sorting.trips <--
    //sorting.location = 'Oslo'
    //model.data.trips = [] <- liste på alle turer
    sorting.trips = model.data.trips; //Lager en kopy av model.data.trips og legger det inn i sorting.trips
    

    //Her starter vi å filtere gjennom sorting.trips
    if (sorting.location != 'Alle Fylker') {
        sorting.trips = sorting.trips.filter( (tur) =>  tur.location.includes(sorting.location) )
        sorting.enabled = true;
    }
    if (input_Parkering) {
        sorting.trips = sorting.trips.filter( (tur) =>  tur.parking == true);
        sorting.enabled = true;
    }
    if (input_Fottur) {
        sorting.trips = sorting.trips.filter( (tur) =>  tur.walking == true);
        sorting.enabled = true;
    }
    if (input_Sykkel) {
        sorting.trips = sorting.trips.filter( (tur) =>  tur.bike == true);
        sorting.enabled = true;
    }
    if (input_Rullestol) {
        sorting.trips = sorting.trips.filter( (tur) =>  tur.wheelchair == true);
        sorting.enabled = true;
    }

    if (sorting.location == 'Alle Fylker' && !sorting.parking && !sorting.walking && !sorting.bike && !sorting.wheelchair) {
        sorting.enabled = false;
    }

    viewTrails();
}