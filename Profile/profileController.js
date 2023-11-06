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


function editProfileDetails() {
    if (model.app.currentUser !== '') {
        let currentUser;
        for (let user of model.data.users) {
            if (showUser(user) === undefined) {
            } else {
                currentUser = showUser(user);
            };
        }
        model.input.loginDetails = {
            admin: currentUser.admin,
            name: currentUser.name,
            userName: currentUser.username,
            password: currentUser.password,
            location: currentUser.location,
            favorites: currentUser.favorites,
            myTrips: currentUser.myTrips,
        };
        model.input.addEdit = true;
        goToSite('createUser');
    } else {
        goToSite('login')
    }
}

function showUser(user) {
    for (let i = 0; i < model.data.users.length; i++) {
        if (user.username === model.app.currentUser) {
            return user;
        }
    }
}

function add_trip() {
    model.data.isNew = true;
    turView_openCard(0);
    ToggleEditMode();
}