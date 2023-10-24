"use strict";

function selection(list) {
    let html = '';

    if (list === 'favorite') {
        html = /*html*/ `
        <div class="content">
            <div class="tur"></div>
            <div class="tur"></div>
            <div class="tur"></div>
            <div class="tur"></div>
            <div class="tur"></div>
        </div>
        `
    } else if (list === 'trips') {
        html = /*html*/ `
        <div class="addBtn">Legg til ny tur</div>
        <div class="content">
            <div class="tur"></div>
            <div class="tur"></div>
            <div class="tur"></div>
            <div class="tur"></div>
            <div class="tur"></div>
        </div>
        `
    }
    return html;
}
