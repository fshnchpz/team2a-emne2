
function memberView()
{
    let html = '<div id="members">';

    for (let index = 0; index < model.data.users.length; index++)
    {
        const member = model.data.users[index];
        html += `<div class="memberdiv">${member.name}</div>`;
    }

    html += '</div>';

    document.getElementById('app').innerHTML = html;
}