function getHTML_turViewMode() {
    let HTML = ``;
    HTML = /*HTML*/`
        <div class="tur_Container">
        <div class="tur_Page">
            <div class="tur_Image"></div>
            <div class="tur_Name">Navn på tur</div>

            <div class="tur_Data">
                <div class="left">

                    <div class="tur_OmTur">
                        <div class="text">Om turen</div>
                        <div class="favorite"></div>
                    </div>

                    <div class="details">
                        <div class="data_field">
                            <div class="icon location"></div>
                            <div class="text">Fylke, kommune, adresse</div>
                        </div>
                        <div class="data_field">
                            <div class="icon tur_type"></div>
                            <div class="text">Enkel fottur, sykkelsti</div>
                        </div>
                        <div class="data_field">
                            <div class="icon measurement"></div>
                            <div class="text">1.4 km</div>
                        </div>
                        <div class="data_field">
                            <div class="icon timeclock"></div>
                            <div class="text">30 minutter</div>
                        </div>
                        <div class="data_field">
                            <div class="icon direction"></div>
                            <div class="text">Turen går fra A-B</div>
                        </div>
                        <div class="data_field">
                            <div class="icon calender"></div>
                            <div class="text">Sesong fra Mai - Oktober</div>
                        </div>
                        <div class="data_field">
                            <div class="icon intensity"></div>
                            <div class="text">Vanskelighet grad: 2</div>
                        </div>
                    </div>

                    <div class="description">
                        <div class="title">Beskrivelse</div>
                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.</div>
                    </div>

                    <div class="extrainfo">
                        <div class="extrainfo_title">Adkomst og parkering</div>
                        <div class="extrainfo_box">
                            <div class="title">Adkomst med egen bil</div>
                            <div class="text">Fra garasjen, rygg bakover og ødelegg rumpa på bilen. Også ta venstre svingen på fjellet og kjør rett ned stupet. Hvis du har lappen...</div>
                        </div>
                    </div>


                </div>
                <div class="divider"></div>
                <div class="right">

                    <div class="map">
                        <div class="map_image"></div>
                        <a href class="button green">Gå til Google Maps</a>
                    </div>

                    
                    <div class="markings">
                        <div class="marking_title">Merker</div>
                        <div class="marking_box">
                            <div class="squarebtn active"><img src="../images/Local_Parking_Icon_8.png"/></div>
                            <div class="squarebtn"><img src="../images/Directions_Walk_Icon_2.png"/></div>
                            <div class="squarebtn"><img src="../images/Accessible_Icon_8.png"/></div>
                            <div class="squarebtn"><img src="../images/Directions_Bike_Icon_1.png"/></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    `; 

    document.getElementById('app').innerHTML = HTML;
}