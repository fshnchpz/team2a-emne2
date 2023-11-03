"use strict";

var list = '';

function profileView() {

    let html = /*html*/ `
    <div class="profileWrapper">
        <div class="profileContainer">
            <div class="top_buttons">
                <div class="button" onclick="profile_filter('favorite')">Mine Favoritter</div>
                <div class="button" onclick="profile_filter('trips')">Mine turer</div>
                ${list == 'trips' && model.app.currentUser.length > 0 ? `<div class="button" onclick="add_trip()">Legg til tur</div>` : ''}
                <div class="button right" onclick="editProfileDetails()">Rediger profil</div>
            </div>
            <div class="list_grid">
                ${selection(list)}
            </div>
        </div>
        </div>
        
    `;
    document.getElementById('app').innerHTML = html;
}