"use strict";

function selection(list) {
    let html = '';

    if (list === 'favorite') {
        html = /*html*/`
        <div class="content">
            ${addMyFavoritesList()}
        </div >
        `;
    } else if (list === 'trips') {
        html = /*html*/`
        <div class="addBtn" >Legg til ny tur</div>
        <div class="content">
            ${addMyTripsList()}
        </div>
        `;
    }
    return html;
}

function addMyFavoritesList() {
    for (let user of model.data.users) {
        if (user[model.app.currentUser]) {
            console.log('nei')
        }
    }
    return `
    <div class="tur"></div>
    <div class="tur"></div>
    <div class="tur"></div>
    <div class="tur"></div>
    <div class="tur"></div>
    `;
}

function addMyTripsList() {
    return `
    <div class="tur"></div>
    <div class="tur"></div>
    <div class="tur"></div>
    <div class="tur"></div>
    <div class="tur"></div>
    `;
}