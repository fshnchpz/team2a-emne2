"use strict";
const data = model.data.trips;
let tur_card_max = 9;
let tur_cardPage = 0;

function viewTrails()
{ //dette viser alle turene som kort
    let html = /*html*/ `
    <div class="cardContainer">
        <div class="grid">
    `;

    if (data.length >= tur_card_max)
    {
        for (let tur_id = (tur_card_max * tur_cardPage); tur_id < tur_card_max; tur_id++)
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

    html += /*html*/`
        </div>
        <div class="carousel_container">
            <div class="arrow" onclick="carousel_previous()">◄</div>
            ${showPageNumber}
            <div class="arrow" onclick="carousel_next()">►</div>
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}

function showPageNumber()
{
    // let pageCounter = Math.ceil(data.length / tur_card_max);
    let pageNumber = '';
    for (let i = 0; i < pageCounter; i++)
    {
        pageNumber += `
        <div class="circle" onclick="${tur_cardPage = i}, viewTrails()">${i + 1}</div>
        `;
    }
    return pageNumber;
}

function getTrailCard(tur_id)
{ //dette viser et kort om gangen
    let html = /*html*/ `
        <div class="card" onClick="turView_openCard(${data[tur_id].id})">
            <div class="prev_image" style="background: url('${data[tur_id].image[0]}') no-repeat; background-size: 100% auto;">
                <img class="star"/>
            </div>
            <div class="card_location">
                <div class="municipality">${data[tur_id].location}</div>
            </div>
            <div class="card_data">
                <div class="name">${data[tur_id].name}</div>
                <div class="distance"><img class="card_icons" src="../images/Square_Foot_Icon_4.png"/>${data[tur_id].distance} km</div>
                <div class="time"><img class="card_icons" src="../images/Watch_Later_Icon_4.png"/>${timeConvert(data[tur_id].time)}</div>
            </div>
            <div class="card_markings">${iconsLoop(tur_id)}</div>
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

function iconsLoop(tur_id)
{
    let html = ``;

    if (data[tur_id].parking)
    {
        html += `<img class="card_markingStyle" src="../images/Local_Parking_Icon_8.png"/>`;
    }
    if (data[tur_id].walking)
    {
        html += `<img class="card_markingStyle" src="../images/Directions_Walk_Icon_2.png"/>`;
    }
    if (data[tur_id].wheelchair)
    {
        html += `<img class="card_markingStyle" src="../images/Accessible_Icon_8.png"/>`;
    }
    if (data[tur_id].bike)
    {
        html += `<img class="card_markingStyle" src="../images/Directions_Bike_Icon_1.png"/>`;
    }
    return html;
}

// function carousel_next(tur_id) {
//     tur_id = (tur_id + 1 < imagearray.length) ? imageindex + 1 : 0;
// }

// function carousel_previous(tur_id) {
//     imageindex = (imageindex - 1 >= 0) ? imageindex - 1 : imagearray.length - 1;
// }