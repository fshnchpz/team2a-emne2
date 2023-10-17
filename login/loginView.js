let tempUserName = "";
let tempPassword = "";

function loginSide() {
    document.getElementById('app').innerHTML =/*HTML*/`
    <div class="loginAndButtons">
        <div class="login">
            <input id="username" onchange= "loginInput()" type="text" placeholder="Brukernavn:">
            <input id="password" onchange= "loginInput()" type="text" placeholder="Passord:">
        </div>
        <div class="loginButtons">
            <button onclick="createUser()">Opprett bruker</button>
            <button onclick="logIn()">Logg inn</button>
        </div>
    </div>`;
}

function loginInput() {
    tempUserName = document.getElementById('username').value;
    tempPassword = document.getElementById('password').value;
}

function createUser() {
    document.getElementById('app').innerHTML =/*HTML*/`


`;
}

function logIn() {
    tempUserName
    tempPassword
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