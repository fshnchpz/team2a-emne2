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
            return sidepanel_view_TurView()
        default:
            return '';
    }
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
            <div class="sidepanel_btn" onclick="ToggleEditMode()">${!model.input.addEdit ? 'Rediger' : 'Avbryt'}</div>
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