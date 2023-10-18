function loginSide() {
    document.getElementById('app').innerHTML =/*HTML*/`
    <div class="loginAndButtons">
            <img src="images/TUR_Project_Supervised_User_Circle_Icon_1.png" alt="logo">
            <br>
            <br>
            <input id="username" onchange= "loginInput()" type="text" placeholder="Brukernavn:">
            <br>
            <input id="password" onchange= "loginInput()" type="text" placeholder="Passord:">
            <br>
            <button onclick="createUser()">Opprett bruker</button>
            <br>
            <button class="logingKnapp" onclick="logIn()">Logg inn</button>
    </div>`;
}

function loginInput() {
    model.input.loginDetails.username = document.getElementById('username').value;
    model.input.loginDetails.password = document.getElementById('password').value;
}

function createUser() {
    document.getElementById('app').innerHTML =/*HTML*/`
    
`;
}

function logIn() {
    if (model.data.users.username == model.input.loginDetails.username) {
        if (model.data.users.password == model.input.loginDetails.password) {
            model.app.currentUser = model.data.users.username;
        }
    }
}

// når man trykker på logginknapp
function tryToLoggIn()
{
    if (model.app.currentUser == '')
    {
        loginSide() //fjernes senere
        model.app.currentPage = "login"
    }
    else
    {
        model.app.currentUser = '';
        getHTML_header();
    }
}

// model.data.users[{
//     admin: false,           //boolean
//     name: '',
//     username: '',
//     password: '',
//     location: '',
//     favorites: [''],     //trip id
//     myTrips: [''],
//     },]