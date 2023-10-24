
let errorPassword = '';
let errorUsername = '';
function createUserpage()
{
    document.getElementById('app').innerHTML =/*HTML*/`
    <div class="createUserInputs">
        <div>Navn:</div><input onchange= "model.input.loginDetails.name=this.value" value="${model.input.loginDetails.name}" type="text"><br>
        <div>Brukernavn:</div><input onchange= "model.input.loginDetails.userName=this.value" value="${model.input.loginDetails.userName}" type="text"><br>
        <div class="errorMsg">${errorUsername}</div><br>
        <div>Passord:</div><input onchange= "model.input.loginDetails.password=this.value" value="${model.input.loginDetails.password}" type="password"><br>
        <div>Bekreft Passord:</div><input id='confirmPasswordInput' value="" type="password"><br>
        <div class="errorMsg">${errorPassword}</div><br>
        <button onclick="createUser()">Opprett bruker</button>
    </div>`
}

function createUser()
{
    const existingUser = model.data.users.find(user => user.username === model.input.loginDetails.userName);
    const confirmPassword = document.getElementById('confirmPasswordInput').value;

    if (existingUser)
    {
        console.log('User with the same username already exists.');
        errorUsername = 'Brukernavnet eksisterer allerede';
    }
    else
    {
        if (model.input.loginDetails.password === confirmPassword)
        {
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

            model.app.currentPage = "login";
        }
        else
        {
            errorPassword = 'Passordene stemmer ikke overens';
        }
    }
    updateview();
}
