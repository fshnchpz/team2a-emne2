"use strict";

function profile_filter(filter) {
    list = filter;
    profileView();
}

function selection(list) {
    let html = '';

    if (list === 'favorite') {
        html = /*html*/`
            ${addMyFavoritesList()}
        `;
    } else if (list === 'trips') {
        html = /*html*/`
            ${addMyTripsList()}
        `;
    }
    return html;
}

function addMyFavoritesList() {
    let html = ``;

    for (let user of model.data.users) {
        if (user.username === model.app.currentUser) {
            for (let tur_id of user.favorites) {
                html += getTrailCard(tur_id);
            }
            return html;
        } else if (('' === model.app.currentUser)) {
            return '';
        }
    }
}

function addMyTripsList() {
    let html = '';
    for (let user of model.data.users) {
        if (user.username === model.app.currentUser) {
            for (let tur_id of user.myTrips) {
                html += getTrailCard(tur_id);
            }
            return html;
        } else if (('' === model.app.currentUser)) {
            return '';
        }
    }

    //utgang punktet skal det sjekke trip sin creator, så nå har vi redundant model variabel
}