"use strict";

function profileView() {
    let list;
    let html = /*html*/ `
        <div class="profileContainer">
            <div onclick="list = 'favorite', profileView()">Mine Favoritter</div>
            <div onclick="list = 'trips', profileView()">Mine turer</div>
            <div onclick="">Rediger profil</div>
            ${selection(list)}
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}