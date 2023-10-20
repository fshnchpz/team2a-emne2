function updateview()
{
    getHTML_header()

    const hvasomhelst = model.app.currentPage;
    switch (hvasomhelst)
    {
        case 'main':
            console.log('switch result:Main')
            document.getElementById('app').innerHTML = '' //erstattes siden
            break;
        case 'profile':
            console.log('switch result:Profile')
            profileView();
            break;
        case 'login':
            loginSide()
            console.log('switch result:Login')
            g
        case 'trips':
            etHTML_turViewMode();
            console.log('switch result:Trips')
            break;
        default:
            console.log('switch result:default')
            break;
    }
}