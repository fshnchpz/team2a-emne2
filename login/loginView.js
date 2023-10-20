
let errorMessage = '';

function loginSide()
{
    document.getElementById('app').innerHTML =/*HTML*/`
    <div class="loginAndButtons">
            <img src="images/TUR_Project_Supervised_User_Circle_Icon_1.png" alt="logo">
            <br>
            <br>
            <input id="username" onchange= "loginInput()" value="${model.input.loginDetails.username}" type="text" placeholder="Brukernavn:">
            <br>
            <input id="password" onchange= "loginInput()" value="${model.input.loginDetails.password}" type="password" placeholder="Passord:">
            <br>
            <div class="errorMsg">${errorMessage}</div><br>
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

function logIn()
{
    const username = model.input.loginDetails.username;
    const password = model.input.loginDetails.password;
    for (const user of model.data.users)
    {
        if (user.username === username && user.password === password)
        {
            model.input.loginDetails.username = '';
            model.input.loginDetails.password = '';
            model.app.currentUser = user.name;
            model.app.currentPage = "main";
            getHTML_header();
            document.getElementById('app').innerHTML = ''; //her kommer main page senere
            errorMessage = '';
            break;
        }
        else
        {
            errorMessage = 'Ditt brukernavn eller passord er feil';
            console.log("username and/or password is wrong");
            loginSide();
        }
    }
}

// når man trykker på logginknapp
function tryToLoggIn()
{
    if (model.app.currentUser == '')
    {
        model.app.currentPage = "login";
    }
    else
    {
        model.app.currentUser = '';
    }
    updateview()
}

function createUser()
{
    document.getElementById('app').innerHTML =/*HTML*/`   
`;
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
