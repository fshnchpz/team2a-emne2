
const usernameinput = model.input.loginDetails.username;
const passwordinput = model.input.loginDetails.password;

function loginSide()
{
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
            <button onclick="logIn()">Logg inn</button>
    </div>`;
}

function loginInput()
{
    model.input.loginDetails.username = document.getElementById('username').value;
    model.input.loginDetails.password = document.getElementById('password').value;
}

function createUser()
{
    document.getElementById('app').innerHTML =/*HTML*/`
    
`;
}

function logIn()
{
    for (let index = 0; index < model.data.users.length; index++)
    {
        const element = model.data.users[index];
        if (element.username == usernameinput)
        {
            if (element.password == passwordinput)
            {
                model.app.currentUser = element.name;
            }
        }
    }
    getHTML_header();
    model.app.currentPage = "main";
}

// når man trykker på logginknapp
function tryToLoggIn()
{
    if (model.app.currentUser == '')
    {
        loginSide() //fjernes senere
        model.app.currentPage = "login";

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
