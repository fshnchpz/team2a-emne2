function viewSidePanel() {

    let HTML = /*HTML*/ `
        <div class="SidePanel_container">
            ${sidepanel_selector(model.app.sidepanel_mode)}
        </div>
    `;
    return HTML;
}

function sidepanel_selector(selection) {
    switch (selection) {
        case 'turView':
            return sidepanel_view_TurView();
        case 'trails':
            return sidepanel_view_Trails();
        default:
            return '';
    }
}

function sidepanel_view_Trails() {
    const tur = model.data.trips.find(trail => {
        return trail.id === model.app.currentTrip;
    });

    /*View*/
    let HTML = /*HTML*/`
        <div class="snap_top">
            <div class="editContainerText">Sortering</div>
            
            <select class="selectFylke" onchange="filter_fylke(this.value)">
                ${getFylkeOptions()}
            </select>
        </div>
        <div class="snap_bottom">
            <div class="goLeft">
                <div class="inputPreview">
                    <div class="checkdiv"><input type="checkbox" onchange="filterChanged()" class="css-checkbox" name="Parkering" id="Parkering" value="Parkering" ${model.input.sorting.parking ? 'checked' : ''}>
                    <label class="checkLabel" for="Parkering">Parkering</label><img class="sp_img" src="../images/Local_Parking_Icon_8.png"/></div>
                    
                    <div class="side_panel_divider"></div>

                    <div class="checkdiv"><input type="checkbox" onchange="filterChanged()" class="css-checkbox" name="Fottur" id="Fottur" value="Fottur" ${model.input.sorting.walking ? 'checked' : ''}>
                    <label class="checkLabel" for="Fottur">Fottur</label><img class="sp_img" src="../images/Directions_Walk_Icon_2.png"/></div>
                    <div class="checkdiv"><input type="checkbox" onchange="filterChanged()" class="css-checkbox" name="Sykkel" id="Sykkel" value="Sykkel" ${model.input.sorting.bike ? 'checked' : ''}>
                    <label class="checkLabel" for="Sykkel">Sykkel</label><img class="sp_img" src="../images/Directions_Bike_Icon_1.png"/></div>
                    <div class="checkdiv"><input type="checkbox" onchange="filterChanged()" class="css-checkbox" name="Rullestol" id="Rullestol" value="Rullestol" ${model.input.sorting.wheelchair ? 'checked' : ''} >
                    <label class="checkLabel" for="Rullestol">Rullestol</label><img class="sp_img" src="../images/Accessible_Icon_8.png"/></div>
                </div>
            </div>
        </div>
    `;

    return HTML;
}

function getFylkeOptions() {
    let HTML = ``;
    const Fylker = ['Alle Fylker','Agder','Akershus','Buskerud', 'Finnmark', 'Innlandet', 'Møre & Romsdal', 'Nordland', 'Oslo', 'Rogaland', 'Telemark & Vestfold','Troms','Trøndelag', 'Vestland', 'Østfold'];
    
    for (let i = 0; i < Fylker.length; i++){
        HTML += `<option value="${Fylker[i]}" ${model.input.sorting.location == Fylker[i] ? 'selected' : ''}>${Fylker[i]}</option>`;
    }

    return HTML;
}

function sidepanel_view_TurView() {
    const tur = model.data.trips.find(trail => {
        return trail.id === model.app.currentTrip;
    });

    /*View*/
    let HTML = /*HTML*/`
        <div class="snap_top">
            <!-- Sjekker om man er admin, så viser panel om Admin panel eller Panel -->
            <div class="editContainerText">${model.app.admin ? 'Admin Panel' : 'Panel'}</div>
            
            <!-- Sjekker om man er i edit mode, så vises Lagre knappen -->
            ${model.input.addEdit ? '<div class="sidepanel_btn green" onclick="saveEditMode()">Lagre</div>' : ''}
            ${model.app.admin ? `<div class="sidepanel_btn" onclick="ToggleEditMode()">${!model.input.addEdit ? 'Rediger' : 'Avbryt'}</div>` : ''}
        </div>
        <div class="snap_bottom">
            <div class="side_panel_divider"></div>
            <div class="status_text_label">Status</div>
            <div class="status_text">${tur.approved ? 'Godkjent' : 'Ikke godkjent'}</div>
            ${!tur.approved && model.app.admin ? '<div class="sidepanel_btn green" onclick="approveTrip()">Godkjenn</div>' : ''}
        </div>
    `;

    return HTML;
}

function filter_fylke(fylke) {
    model.input.sorting.location = fylke;
    filterUpdate();

    //oppdatere view

    //funksjon i viewTrails som bruker verdien, og lager en ny liste med filtrert etter fylke

}

