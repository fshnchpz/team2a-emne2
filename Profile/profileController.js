"use strict";

function selection(list) {
    let html = '';

    if (list === 'favorite') {
        html = /*html*/ `
        <div class="content">
            ${writeFavorites()}
        </div>
        `
    } else if (list === 'trips') {
        html = /*html*/ `
        <div class="addBtn" onclick="openCard()">Legg til ny tur</div>
        <div class="content">
            ${writeTrips()}
        </div>
        `
    }
    return html;
}

function openCard() {
    let id_nb = model.data.trips.length
    model.data.trips.push({
        id: id_nb,
        name: '',
        about: '',
        location: '',
        distance: 0,        //number
        time: 0,            //number
        image: [],          //src/link
        season: '',
        // accessability: '',
        map: '',            //src/link
        difficulty: 0,      //number
        parking: false,         //boolean
        walking: false,        //boolean
        wheelchair: false,      //boolean
        bike: false,           //boolean
        google_link: '',     //src/link
        creator: model.app.currentUser,
        approved: false,
    })
    console.log(id_nb)
    turView_openCard(id_nb);
    model.input.addEdit = !model.input.addEdit;
    getHTML_turViewMode();
}

function writeFavorites() {
    for (let ary of model.data.users) {
        console.log(model.app.currentUser)
       if (model.app.currentUser === ary) {
        console.log('hei')
       }
    }
}