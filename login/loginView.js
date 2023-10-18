let tempUserName = "";
let tempPassword = "";

function loginSide()
{
    document.getElementById('app').innerHTML =/*HTML*/`
    <div class="loginAndButtons">
        <div class="login">
            <img src="images/TUR_Project_Supervised_User_Circle_Icon_1.png" alt="logo">
            <input id="username" onchange= "loginInput()" type="text" placeholder="Brukernavn:">
            <input id="password" onchange= "loginInput()" type="text" placeholder="Passord:">
        </div>
        <div class="loginButtons">
            <button onclick="createUser()">Opprett bruker</button>
            <button onclick="logIn()">Logg inn</button>
        </div>
    </div>`;
}

function loginInput()
{
    tempUserName = document.getElementById('username').value;
    tempPassword = document.getElementById('password').value;
}

function createUser()
{
    document.getElementById('app').innerHTML =/*HTML*/`

`;
}

function logIn()
{
    tempUserName
    tempPassword
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