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
    let confirm_text = 'godkjent';

    /*View*/
    let HTML = /*HTML*/`
        <div class="snap_top">
            <div class="editContainerText">Panel</div>
            
            ${model.input.addEdit ? '<div class="sidepanel_btn green" onclick="saveEditMode()">Lagre</div>' : ''}
            <div class="sidepanel_btn" onclick="ToggleEditMode()">${!model.input.addEdit ? 'Rediger' : 'Avbryt'}</div>
        </div>
        <div class="snap_bottom">
            <div class="side_panel_divider"></div>
            <div class="status_text_label">Status</div>
            <div class="status_text">${confirm_text}</div>
        </div>
    `;

    return HTML;
}