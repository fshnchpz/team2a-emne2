
function memberView()
{
    let html = `
    <div class="members_Wrapper">
        <div class="members_Container">
            <div class="members_Grid">
                ${getMemberAllCards()}
            </div>
        </div>
    </div>`;

    document.getElementById('app').innerHTML = html;
}

function getMemberAllCards() {
    let HTML = ``;
    const Members = model.data.users;
    const CurUser = model.app.currentUser;
    for (let index = 0; index < Members.length; index++)
    {
        const Member = Members[index];
        if (CurUser != Member.username) {
            HTML += getMemberCard(Member.username);
        }
        
    }

    return HTML;
}

function getMemberCard(user_id) {
    const User = model.data.users.find(user_obj => {
        return user_obj.username === user_id;
    });

    let HTML = /*HTML*/ `
        <div class="MemberCard">
            <div class="backgroundStyle"></div>
            <div class="profileImage"><img src="../images/TUR_Project_Account_Circle_Icon_2.png"></div>
            
            <div class="role">${User.admin ? 'Administrator' : 'Medlem'}</div>
            <div class="name">${User.name}</div>
            <div class="userlocation">${User.location}</div>
            <button class="message" onclick="MessageMember('${User.username}')">Send melding</button>
        </div>
    `; 
    return HTML;
}