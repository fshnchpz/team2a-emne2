"use strict";

function getHTML_header()
{
    let HTML = ``;
    let LoginText = ``;
    let CurrentUserText = ``;
    
    const onPage = model.app.currentPage;

    const curUser = model.data.users.find(User => {
        return User.username === model.app.currentUser;
    });

    // Dette skjekker om brukeren er logget inn og vil derfor endre om det står logg inn eller logg ut.
    if (model.app.currentUser === '')
    {
        LoginText = 'Logg inn';
        CurrentUserText = `
        <div class="user_content">
            <div class="user_text">Bruker</div>
            <div class="acc_ico_user"/><div>
        </div>
        `;
    } else
    {
        LoginText = 'Logg ut';
        CurrentUserText = `
        <div class="user_content">
            <div class="user_text">${curUser.name}</div>
            <div class="acc_ico_user"/><div>
        </div>
        `;
    }
    

    HTML += /*HTML*/`

        <!-- Logg inn knappen -->
        <div id="topMainLogInBtn" class="topMainLogInBtn" onclick="tryToLogIn()">
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
            <div onclick="goToSite('trips')" class="pages ${onPage == 'main' || onPage == 'trips' ? 'active' : ''}">Turer</div>
            <!-- Profiler knappen -->
            <div onclick="goToSite('profile')" class="pages ${onPage == 'profile' ? 'active' : ''}">Profil</div>
            <!-- Medlemmer knappen -->
            <div onclick="goToSite('members')" class="pages ${onPage == 'members' ? 'active' : ''}">Medlemmer</div>
            <!-- Bruker knappen + account icon -->
            <div id="topMainPageAccountBtn" onclick="goToSite('profile')" class="topMainPageAccountBtn">${CurrentUserText}</div>
        </div>
    `;
    document.getElementById('header').innerHTML = HTML;
}

