"use strict";

function getHTML_header() {
    let HTML = ``;
    let LoginText = ``;
    let CurrentUserText = ``;

    // Dette skjekker om brukeren er logget inn og vil derfor endre om det står logg inn eller logg ut.
    if (model.app.currentUser === '') {
        LoginText = 'Logg inn';
        CurrentUserText = `
        <div class="user_content">
            <div class="user_text">Bruker</div>
            <div class="acc_ico_user"/><div>
        </div>
        `;
    } else {
        LoginText = 'Logg ut';
        CurrentUserText = model.app.currentUser + '';
    }

    HTML += /*HTML*/`
        
        <!-- Logg inn knappen -->
        <div id="topMainLogInBtn" class="topMainLogInBtn" onclick="">
            <div class="LoginBTN_position">
                <img src="../images/TUR_Project_Account_Circle_Icon_2.png" class="acc_ico">
                <div id="login_txt" class="login_txt">${LoginText}</div>
            </div>
        </div>
        <!-- Bakgrunnsbildet div -->
        <div class="topMainBackgroundImage">
            <!-- Bakgrunnsbildet -->
            <!-- Logoboks -->
            <div class="topLogoBackgroundBox">
                <!-- Logo -->
                <div class="topMainLogo" onclick="location.reload()">TUR</div>
            </div>
        </div>
        <!-- Linjen med knapper under bakgrunnsbildet -->
        <div class="topMainPagesBtns">
            <!-- Turer knappen -->
            <div class="pages">Turer</div>
            <!-- Profiler knappen -->
            <div class="pages">Profil</div>
            <!-- Medlemmer knappen -->
            <div class="pages">Medlemmer</div>
            <!-- Bruker knappen + account icon -->
            <div id="topMainPageAccountBtn" class="topMainPageAccountBtn">${CurrentUserText}</div>
        </div>
    `;
    document.getElementById('header').innerHTML = HTML;
    profileView();
}