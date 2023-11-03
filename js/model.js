const model = {
    app: {
        currentUser: '',
        currentPage: 'trips', // main / trips / profile / members / login/createUser
        admin: false,
        currentTrip: null,
        sidepanel_mode: '',
    },
    input: {
        sorting: {
            enabled: false,
            trips: [],
            location: '',
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
        },
        addEdit: false,        //boolean
        tripEditAdd: {
            name: '',
            about: '',
            location: '',
            distance: 0,        //number
            time: 0,            //number
            image: [],          //src/link
            season: '',
            accessability: '',
            map: '',            //src/link
            difficulty: null,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
        },
        loginDetails: {
            admin: false,
            name: '',
            userName: '',
            password: '',
            location: '',
            favorites: [],
            myTrips: [],
        },
    },
    data: {
        mainPage: [{
            carouselIndex: 0,
        }],
        users:
            [
                {
                    admin: false,           //boolean
                    name: "Lars Monsen",
                    username: "user0",
                    password: "1234",
                    location: "Telemark & Vestfold, Skien",
                    favorites: [],     //trip id
                    myTrips: [],
                },
                {
                    admin: true,           //boolean
                    name: "Anita",
                    username: "user1",
                    password: "1234",
                    location: "Vestfold, Larvik",
                    favorites: [0, 2, 11],     //trip id
                    myTrips: [0, 11, 2],
                },
                {
                    admin: false,           //boolean
                    name: "Bear Grylls",
                    username: "user3",
                    password: "1234",
                    location: "England",
                    favorites: [4],     //trip id
                    myTrips: [],
                },
                {
                    admin: false,           //boolean
                    name: "Chuck Norris",
                    username: "user4",
                    password: "1234",
                    location: "AMERICA!",
                    favorites: [1, 2, 3],     //trip id
                    myTrips: [],
                },
                {
                    admin: false,           //boolean
                    name: "Stephen Robert Irwin",
                    username: "user5",
                    password: "1234",
                    location: "australia",
                    favorites: [2, 6, 8],     //trip id
                    myTrips: [],
                },

            ],
        trips: [{
            id: 0,
            name: 'Rundtur til Rognlifjell',
            about: `Denne rundturen tar for seg at man går opp "østløypa" og ned igjen "utsiktsløypa" men man kan fint også gå den motsatt vei.
                    Rognlifjell (961 moh) kan by på kanskje Lifjells mest spektakulære utsikt! 
                    Rognlifjell ligger på Lifjell og er kjent som «føttene til Lifjellmannen» der Trogafjell er «hodet».
                    Notodden og Hjartdal Turlag har skiltet og merket mesteparten av Lifjell svært godt og har på toppen av Rognlifjell en klassisk rød DNT-turkasse.`,
            location: 'Oslo, blabla potetveg 1',
            accessability: 'Enkel fottur',
            distance: 5.0,        //number
            time: 180,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/rwtywah4yjybotyg1bvf', 'https://www.datocms-assets.com/55942/1634105507-tips-til-fjelltur.jpg'],          //src/link
            season: ' Apr - nov',
            accessability: ``,
            map: '../images/turmap1.png',            //src/link
            difficulty: 5,      //number 1-10
            parking: false,         //boolean
            walking: true,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: 'Jan Johansen',
            approved: true,
        },
        {
            id: 1,
            name: 'Trodla-Tysdal',
            about: `Her er storslått natur med ville fjell, urer og gammel edellauvskog. Men også et praktfullt kulturlandskap med mange synlige minner etter tidligere generasjoners utnytting av og samliv med naturen. Vi anbefaler fotturen over fra Kleivaland.`,
            location: 'Rogaland, Setesdal-Ryfylke',
            distance: 6.8,        //number
            time: 220,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/oif78cnpuqwcpu0zclvv'],          //src/link
            season: 'Mai - sep',
            accessability: 'Middels krevende fottur',
            map: '../images/turmap1.png',            //src/link
            difficulty: 5,      //number
            parking: false,         //boolean
            walking: true,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: 'https://www.google.com/maps/dir//59.235941,6.3843254/@59.2205408,6.3621782,12z?entry=ttu',     //src/link
            creator: 'admin',
            approved: true,
        },
        {
            id: 2,
            name: 'Sognsvann til Ullevålseter',
            about: `Sykkelturen fra Sognsvann til Ullevålseter og tilbake er klassikeren for alle barnefamilier. Det er riktignok mye motbakke opp til Ullevålseter, men der venter både varm og kald drikke, vafler og hjemmebakst. 

            Etter en lang pause på tunet på Ullevålseter kan dere ta samme vei hjem igjen eller følge veien som går på vestsida ned igjen, slik dette turforslaget viser. 
            
            Start ved T-banestasjonen på Sognsvann og følg hovedveien på østsiden av Sognsvann. Ved Svartkulp må du passe på å holde til venstre. Det er lettsyklet langs Sognsvann, men i enden starter motbakkene. Etter Store Åklungen tar du til venstre, opp de siste bakkene til Ullevålseter.
            
            Fra Ullevålseter følger du veien som går sørover. Denne veien er lysløypa mellom Frognerseteren og Ullevålseter om vinteren. Etter ca to kilometer med kupert terreng passerer du Lorttjern på høyre hånd. I krysset etter Lorttjern sykler du rett frem til nedoverbakkene mot Sognsvann. Her kan farten bli høy, så pass på. 
            
            OBS! Det er mange som er på tur - både gående og syklende - mellom Sognsvann og Ullevålseter. Vis hensyn! `,
            location: 'Oslo, Nordmarka',
            distance: 11.2,        //number
            time: 180,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/fu0e6gcufb2c8woku62k'],          //src/link
            season: 'Mars - September',
            accessability: 'Rundtur på Sykkel',
            map: '../images/turmap1.png',            //src/link
            difficulty: 3,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: true,           //boolean
            google_link: 'https://www.google.com/maps/dir//59.96774,10.73303',     //src/link
            creator: 'admin',
            approved: true,
        },
        {
            id: 3,
            name: 'Håfjellet frå Håland',
            about: `Turen startar frå Håland på det høgste punktet på vegen frå Stordalen over til Skånevik. Turen er omlag 10,5 km tur/retur og har 600 stigemeter.`,
            location: 'Vestland, Etne- og Saudafjella',
            distance: 11.3,        //number
            time: 240,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/jqil5dc6ynejekkonpey'],          //src/link
            season: 'Apr - okt',
            accessability: 'Middels krevende fottur',
            map: '../images/turmap1.png',            //src/link
            difficulty: 5,      //number
            parking: true,         //boolean
            walking: true,        //boolean
            wheelchair: false,      //boolean
            bike: true,           //boolean
            google_link: 'https://www.google.com/maps/dir//59.7228664,6.0843963/@59.7401137,6.1168795,12z?entry=ttu',     //src/link
            creator: 'admin',
            approved: true,
        },
        {
            id: 4,
            name: 'Jotkarunden',
            about: `Dette er en flott rundtur på fjellet som går via Jotka fjellstue. Her kan man bestille forpleining og overnatting. Du følger i stor grad traktorveg og ATV vei. Før fjellstua er vegen ganske steinete og kupert. Du møter noen bekkekrysninger underveis.

            Følg traktorvegen fra nordenden av Stuorajavri (Storvannet) og hold til høyre i veikrysset. Du kommer opp på Skogbandfjellet og fortsett her til du ankommer ned til Jotka fjellstue.
            
            Videre følger du veien sørøstover fra fjellstua. Hold til høyre i første kryss og fortsett opp mot toppen av Brennåsen. På vei ned fra toppen dreier vegen mot nordvest. Følg denne vegen til du møter asfaltert anleggsveg. Denne tilhører kraftanlegget. Ta til høyre og følg vegen til Tutteberget og tilbake til startpunktet.`,
            location: 'Finnmark, Finnmarksvidda',
            distance: 34.5,        //number
            time: 300,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/qwison5pyexitvxpvivp'],          //src/link
            season: 'Mai - September',
            accessability: 'Rundtur på Sykkel',
            map: '../images/turmap1.png',            //src/link
            difficulty: 6,      //number
            parking: true,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: true,           //boolean
            google_link: 'https://www.google.com/maps/dir//69.81008093,23.81512119',     //src/link
            creator: 'admin',
            approved: true,
        },
        {
            id: 5,
            name: 'Havstien i Kristiansund',
            about: `Havstien er en nærtur og rundur i Kristiansund som går med start og slutt i Rokilde.

            Turen er som en fjelltur i fjæresteinene og byr på variert tur-terreng som passer de fleste.
            
            Fra Rokilde går stien i retning utsikten over Litjsand. Så er det lett kliving ned mot Storsanden og stien følger fjæra i retning mot Klubba.`,
            location: 'Innlandet, Nordmøre med Fjordruta',
            distance: 3.7,        //number
            time: 60,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/zr1wqnlzl3degjqaxaky'],          //src/link
            season: 'Hele året',
            accessability: 'Middels krevende fottur',
            map: '',            //src/link
            difficulty: 4,      //number
            parking: false,         //boolean
            walking: true,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: 'https://www.google.com/maps/dir//63.1122358,7.7163835/@63.1121609,7.6344485,12z?entry=ttu',     //src/link
            creator: 'admin',
            approved: true,
        },
        {
            id: 6,
            name: 'Gåtur rundt Prestvannet',
            about: `Omtrent midt på Tromsøya ligger dette flotte turområdet. Det ligger nært sentrum og mange boligområder. Prestvannet ligger på 96 moh og er et kjært turmål i Tromsø, sommer som vinter. Deler av lysløypa går inntil vannet og resten av stien holdes oppe av mange turgåere vinterstid. På vinteren brukes Prestvannet også for å gå på skøyter- men vær obs ang. istykkelse. Det er også et flott sted for å se på nordlyset. På sommerstid er det god vei langs vannet som egner seg både til sykkel, barnevogn og rullestol. Veien rundt Prestvannet egner seg også godt til å jogge, og er et flott utgangspunkt for stier videre rundt på øya.

            Området rundt Prestvannet er et populært friluftsområde og det er leveområde for en rekke planter og dyr. Fordi området har stor verdi for vannfugler og friluftslivet, ble området vernet som landskapsvernområde med dyrelivsfredning i 1995. I et landskapsvernområdet er det en del ting en må passe på. For hele reglementet, vennligst se vedlagte link. Det viktigste for deg som vanlig turgåer vil antagelig være angående å kun brenne bål på de opprettede bålstedene, samt å respektere båndtvangen. Dette for å unngå at løshunder stresser eller skader fuglene.
            
            Prestvannet var opprinnelig to små vann som ble demmet opp i 1867 og brukt som drikkevannskilde frem til 1890. Gjennom årene er området tilrettelagt med stier, brygger, benker og informasjonsskilt.
            
            I vannet finnes trepigget stingsild og karuss og ikke minst de store flytetorver som en ser tydelig fra land. Disse som fungerer som hekkeområde, skjul og næringskilde for fugler. For mange fuglearter har området stor verdi som hekke-, beite- og trekklokalitet. Den vanligste arten er fiskemåse. Andre måkearter som svartbak, gråmåke og hettemåke er også observert. I hekketiden kan du også se rødnebbterne og makrellterne. Den mest spennende fuglen i Prestvannet er kanskje smålommen, som har vannet som leve- og hekkeområde, og er lett å se og fotografere her. Andre arter som er observert i området er rødstilk, enkeltbekkasin, gråhegre og brushane. Av hekkende andefugler er det mest stokkender, men også toppender hekker ved Prestvannet. Andre andefugler som brunnakke, siland, laksand, krikkand, skjeand, stjertand er også observert i området. Skogen rundt Prestvannet er hekkelokalitet for lirype og leveområde for en rekke spurvefuglarter.
            
            Skogen rundt vannet domineres av bjørk og innslag av ulike viearter, selje, gråor og plantet norsk gran. Utformingen av bjørkeskogen varierer fra høystaude- til blåbærskog, og det er en del gammel storstammet bjørk på sør-øst siden av vannet.
            
            Teksten er utarbeidet i samarbeid med Tromsø Kommune.`,
            location: 'Troms, Prestvatn',
            distance: 1.8,        //number
            time: 30,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/dhk5mrfswkiftvyy9fug'],          //src/link
            season: 'Hele året',
            accessability: 'Enkel fottur',
            map: '../images/turmap1.png',            //src/link
            difficulty: 1,      //number
            parking: false,         //boolean
            walking: true,        //boolean
            wheelchair: true,      //boolean
            bike: false,           //boolean
            google_link: 'https://www.google.com/maps/dir//69.655572149,18.93371959',     //src/link
            creator: 'admin',
            approved: true,
        },
        {
            id: 7,
            name: 'Olhovd',
            about: `Olhovd er det nordligste delen av høydedraget som liggger på sørsiden av Prestfoss sentrum. Selve toppen ligger 547 meter over havet.
            Herfra kan man skue vest- og nordover mot Sigdals største innsjø Soneren, og mot Andersnatten, Eggedalsfjella og Norefjell. Det er også fin utsikt til Kråkefjorden og Prestfoss sentrum.
            Turen starter på Gvilarhaugen og runden går delvis på skogsbilvei, sti og på gressgrodd kjerrevei.
            Like før toppen kommer man til Hovden seter, som er ei av mange setre som tidligere var i drift hver sommer.`,
            location: 'Buskerud, Holtefjell',
            distance: 3.2,        //number
            time: 60,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/krz06gqb1kjihsltxozg'],          //src/link
            season: 'Mai - Oktober',
            accessability: 'Enkel fottur',
            map: '../images/turmap1.png',            //src/link
            difficulty: 3,      //number
            parking: true,         //boolean
            walking: true,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: 'admin',
            approved: true,
        },
        {
            id: 8,
            name: 'Falstadstien',
            about: `Falstadstien er en flott sti i et område med spesiell historie. Her er det godt tilrettelagt for barnevogn, rullestol og gåhjelpemiddel første kilometer av stien. Turen starter ved å krysse veien og gå retning minnesmerket. Stinettverket startet bak minnesmerket og her kan man finne informasjonstavler om dette historiske stedet. Følg stien rett ...`,
            location: 'Nord-Trøndelag, Trøndelagskysten',
            distance: 2.1,        //number
            time: 45,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/i9j3ucsflozqouu43sir'],          //src/link
            season: 'Mar - nov',
            accessability: 'Enkel fottur',
            map: '../images/turmap1.png',            //src/link
            difficulty: 1,      //number
            parking: true,         //boolean
            walking: true,        //boolean
            wheelchair: true,      //boolean
            bike: true,           //boolean
            google_link: 'https://www.google.com/maps/dir//63.6829033,11.0355911/@63.6537557,11.1705403,12z?entry=ttu',     //src/link
            creator: 'admin',
            approved: true,
        },
        {
            id: 9,
            name: 'Naushornet fra Veltdalshytta',
            about: `Start fra Veltdalshytta på ruta til Reindalseter via Huldrekoppen. Ved østenden av Langfonnvatnet, 
            drei mot nord og sikt deg inn på det laveste punktet mellom Naushornet og høyde 1848. Følg ryggen til topps. Retur samme vei.
            Om man ikke ønsker å gå over snøfeltet kan man passere Langfonnvatnet og dreie mot sørryggen opp til høyde 1848.`,
            location: 'Møre & Romsdal, Tafjordfjella og Reinheimen',
            distance: 10.9,        //number
            time: 240,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/kegne5hcqelxoiwz27az'],          //src/link
            season: 'Jun - Sep',
            accessability: 'Krevende fottur',
            map: '../images/turmap1.png',            //src/link
            difficulty: 8,      //number
            parking: true,         //boolean
            walking: true,        //boolean
            wheelchair: false,      //boolean
            bike: true,           //boolean
            google_link: 'https://www.google.com/maps/dir//62.159494489,7.720366453',     //src/link
            creator: 'admin',
            approved: true,
        },
        {
            id: 10,
            name: 'Jultonåsen og Egneråsen',
            about: `I Grindbakkveien ved Vølner i Sørum går en skogsvei opp i skogen. Skogsveien er stengt med bom, hvor det kan parkeres for noen biler. Etter å ha gått skogsveien et lite stykke, går en merket sti av mot høyre og følger en jordekant til skogkanten. Stien fortsetter til toppen av Jultonåsen hvor det står en flott gapahuk og fantastisk utsikt vestov...`,
            location: 'Akershus Øst',
            distance: 5.8,        //number
            time: 150,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/ysjodgonyunwtmrplqot'],          //src/link
            season: 'Mar - nov',
            accessability: 'Enkel fottur',
            map: '../images/turmap1.png',            //src/link
            difficulty: 1,      //number
            parking: true,         //boolean
            walking: true,        //boolean
            wheelchair: true,      //boolean
            bike: true,           //boolean
            google_link: 'https://www.google.com/maps/dir//60.049947,11.266898/@60.0498684,11.1844826,12z?entry=ttu',     //src/link
            creator: 'admin',
            approved: true,
        },],
    },
};


