function updateview()
{
    getHTML_header();

    const hvasomhelst = model.app.currentPage;
    switch (hvasomhelst)
    {
        case 'main':
            document.getElementById('app').innerHTML = '' //erstattes siden
            console.log('switch result:Main')
            break;
        case 'profile':
            profileView();
            console.log('switch result:Profile')
            break;
        case 'login':
            loginSide();
            console.log('switch result:Login')
            break;
        case 'trips':
            viewTrails();
            console.log('switch result:Trips')
            break;
        case 'createUser':
            createUserpage();
            console.log('switch result:createUser')
            break;
        case 'members':
            memberView();
            console.log('switch result:members')
            break;
        default:
            console.log('switch result:default')
            break;
    }
}

function goToSite(site)
{
    model.app.currentPage = site;
    updateview();
}