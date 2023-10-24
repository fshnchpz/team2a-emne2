
let errorMessage = '';

function loginSide()
{
    document.getElementById('app').innerHTML =/*HTML*/`
    <div class="loginAndButtons">
            <img src="images/TUR_Project_Supervised_User_Circle_Icon_1.png" alt="logo">
            <br>
            <br>
            <input id="username" onchange= "loginInput()" value="${model.input.loginDetails.userName}" type="text" placeholder="Brukernavn:">
            <br>
            <input id="password" onchange= "loginInput()" value="${model.input.loginDetails.password}" type="password" placeholder="Passord:">
            <br>
            <div class="errorMsg">${errorMessage}</div><br>
            <button onclick="goToSite('createUser')">Opprett bruker</button>
            <br>
            <button onclick="logIn()">Logg inn</button>
    </div>`;
}

function loginInput()
{
    model.input.loginDetails.userName = document.getElementById('username').value;
    model.input.loginDetails.password = document.getElementById('password').value;
}

function logIn()
{
    const username = model.input.loginDetails.userName;
    const password = model.input.loginDetails.password;
    let userFound = false;

    for (const user of model.data.users)
    {
        if (user.username === username && user.password === password)
        {
            model.input.loginDetails.userName = '';
            model.input.loginDetails.password = '';
            model.app.currentUser = user.name;
            goToSite('main')
            getHTML_header('createUserpage');
            userFound = true; // Set the flag to true
            errorMessage = '';
            break;
        }
    }

    if (!userFound)
    {
        errorMessage = 'Ditt brukernavn eller passord er feil';
        console.log("username and/or password is wrong");
    }
    updateview();
}

// når man trykker på logginknapp oppe til venstere
function tryToLogIn()
{
    if (model.app.currentUser == '')
    {
        goToSite('login')
    }
    else
    {
        model.app.currentUser = '';
    }
    updateview();
}


