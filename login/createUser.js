
let errorPassword = '';
let errorUsername = '';
function createUserpage() {
    document.getElementById('app').innerHTML =/*HTML*/`
    <div class="createUserInputs">
        <div class="registerLabel">Navn:</div><input class="loginInput" onchange= "model.input.loginDetails.name=this.value" value="${model.input.loginDetails.name}" type="text"><br>
        <div class="registerLabel">Brukernavn:</div><input class="loginInput" onchange= "model.input.loginDetails.userName=this.value" value="${model.input.loginDetails.userName}" type="text"><br>
        <div class="registerLabel errorMsg">${errorUsername}</div><br>
        <div class="registerLabel">Passord:</div><input class="loginInput" onchange= "model.input.loginDetails.password=this.value" value="${model.input.loginDetails.password}" type="password"><br>
        <div class="registerLabel">Bekreft Passord:</div><input class="loginInput" id='confirmPasswordInput' value="" type="password"><br>
        <div class="registerLabel errorMsg">${errorPassword}</div><br>
        ${model.input.addEdit ? '<button class="loginButton" onclick="saveUserDetail()">Lagre bruker</button>' : '<button class="loginButton" onclick="createUser()">Opprett bruker</button>'}
    </div>`
}

function createUser() {
    const existingUser = model.data.users.find(user => user.username === model.input.loginDetails.userName);
    const confirmPassword = document.getElementById('confirmPasswordInput').value;
    errorUsername = '';
    errorPassword = '';
    if (model.input.loginDetails.userName == '') {
        errorUsername = 'Brukernavn mangler';

    }
    else if (existingUser) {
        console.log('User with the same username already exists.');
        errorUsername = 'Brukernavnet eksisterer allerede';
    }
    else {
        if (model.input.loginDetails.password === confirmPassword) {
            const newUser = {
                admin: false,
                name: model.input.loginDetails.name,
                username: model.input.loginDetails.userName,
                password: model.input.loginDetails.password,
                location: model.input.loginDetails.location,
                favorites: [],
                myTrips: [],
            }
            model.data.users.push(newUser);

            model.input.loginDetails.name = '';
            model.input.loginDetails.userName = '';
            model.input.loginDetails.password = '';
            model.input.loginDetails.location = '';
            goToSite('login');
        }
        else {
            errorPassword = 'Passordene stemmer ikke overens';
        }
    }
    updateview();
}


function saveUserDetail() {
    const confirmPassword = document.getElementById('confirmPasswordInput').value;
    errorUsername = '';
    errorPassword = '';
    if (model.input.loginDetails.userName == '') {
        errorUsername = 'Brukernavn mangler';
    }
    else {
        if (model.input.loginDetails.password === confirmPassword) {
            for (let user of model.data.users) {
                if (showUser(user) === undefined) {
                } else {
                    currentUser = showUser(user);
                };
            }
            let userIdNumb = whichUser();
            model.data.users[userIdNumb].name = model.input.loginDetails.name;
            model.data.users[userIdNumb].username = model.input.loginDetails.userName;
            model.data.users[userIdNumb].password = model.input.loginDetails.password;

            model.input.loginDetails.name = '';
            model.input.loginDetails.userName = '';
            model.input.loginDetails.password = '';
            goToSite('profile');
        } else {
            errorPassword = 'Passordene stemmer ikke overens';
        }
    }
    updateview();
}

function whichUser() {
    let i = 0;
    for (let user of model.data.users) {
        i++;
        if (user.username === model.app.currentUser) {
            return i - 1;
        }
    }
}