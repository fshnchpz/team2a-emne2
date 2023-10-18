"use strict";

let noe = '';

function profileView() {
    let html = /*html*/ `
        <div class="container">
            <div class="profileBtns">
                <div class="categories">
                    <div onclick="noe = 'favorite', profileView()">Mine Favoritter</div>
                    <div onclick="noe = 'trips', profileView()">Mine turer</div>
                </div>
                <div class="editProfileBtn" onclick="model.app.currentPage = 'addTrip'">Rediger profil</div>
            </div>
            ${selection(noe)}
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}