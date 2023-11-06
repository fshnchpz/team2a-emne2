function updateview() {
    getHTML_header();
    model.input.addEdit = false;
    const hvasomhelst = model.app.currentPage;
    switch (hvasomhelst) {
        case 'main':
            model.data.isNew = false;
            viewTrails();
            console.log('switch result:Trips')
            break;
        case 'profile':
            model.data.isNew = false;
            profileView();
            console.log('switch result:Profile')
            break;
        case 'login':
            model.data.isNew = false;
            loginSide();
            console.log('switch result:Login')
            break;
        case 'trips':
            model.data.isNew = false;
            viewTrails();
            console.log('switch result:Trips')
            break;
        case 'createUser':
            model.data.isNew = false;
            createUserpage();
            console.log('switch result:createUser')
            break;
        case 'members':
            model.data.isNew = false;
            memberView();
            console.log('switch result:members')
            break;
        default:
            console.log('switch result:default')
            break;
    }
}
function goToSite(site) {
    if (site !== 'createUser') {
        model.input.addEdit = false;
    }
    model.app.currentPage = site;
    updateview();
}