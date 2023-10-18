"use strict";

function profileView() {
    let html = /*html*/ `
        <div class="container">
            <div class="profileBtns">
                <select id="dropdown" name="dropdown" onchange="hideBlock()">
                    <option value="choose">Velg liste</option>
                    <option value="myFavorite">Mine favoritter</option>
                    <option value="myTrips">Mine turer</option>
                </select>
                <div class="editProfileBtn">Rediger profil</div>
            </div>
            <div id="content">
                <div class="content">
                    <div class="tur"></div>
                    <div class="tur"></div>
                    <div class="tur"></div>
                    <div class="tur"></div>
                    <div class="tur"></div>
                    <div class="tur"></div>
                    <div class="tur"></div>
                    <div class="tur"></div>
                    <div class="tur"></div>
                    <div class="tur"></div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}