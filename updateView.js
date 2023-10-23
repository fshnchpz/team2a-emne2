function updateview()
{
    getHTML_header()

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
            loginSide()
            console.log('switch result:Login')
            break;
        case 'trips':
            etHTML_turViewMode();
            console.log('switch result:Trips')
            break;
        default:
            console.log('switch result:default')
            break;
    }
}