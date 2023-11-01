"use strict";

function profileView() {
    let list;
    let html = /*html*/ `
        <div class="profileContainer">
            <div>
                <div onclick="list = 'favorite', profileView()">Mine Favoritter</div>
                <div onclick="list = 'trips', profileView()">Mine turer</div>
            </div>
            <div>
                <div onclick="">Rediger profil</div>
            </div>
            ${selection(list)}
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}