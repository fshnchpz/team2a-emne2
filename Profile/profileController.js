"use strict";

function hideBlock() {
    if (document.getElementById('dropdown').value === 'choose') {
        document.getElementById('content').style.display = 'none'
    } else {
        document.getElementById('content').style.display = 'block'
    }
}