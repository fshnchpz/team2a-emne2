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
                    name: 'Lars Monsen',
                    username: 'user0',
                    password: '1234',
                    location: 'Telemark & Vestfold, Skien',
                    favorites: [],     //trip id
                    myTrips: [],
                },
                {
                    admin: true,           //boolean
                    name: 'Anita',
                    username: 'user1',
                    password: '1234',
                    location: 'Vestfold, Larvik',
                    favorites: [0,2,11],     //trip id
                    myTrips: [0,11,2],
                },

            ],
        trips: [{
            id: 0,
            name: 'Rundtur til Rognlifjell',
            about: `Denne rundturen tar for seg at man går opp "østløypa" og ned igjen "utsiktsløypa" men man kan fint også gå den motsatt vei.
                    Rognlifjell (961 moh) kan by på kanskje Lifjells mest spektakulære utsikt! 
                    Rognlifjell ligger på Lifjell og er kjent som «føttene til Lifjellmannen» der Trogafjell er «hodet».
                    Notodden og Hjartdal Turlag har skiltet og merket mesteparten av Lifjell svært godt og har på toppen av Rognlifjell en klassisk rød DNT-turkasse.`,
            location: 'Telemark, Øst-Telemark, Lifjell',
            distance: 5.0,        //number
            time: 180,            //number
            image: ['https://res.cloudinary.com/ntb/image/upload/w_1280,q_80/v1/trips/rwtywah4yjybotyg1bvf', 'https://www.datocms-assets.com/55942/1634105507-tips-til-fjelltur.jpg'],          //src/link
            season: ' Apr - nov',
            accessability: "Fra Notodden kjører du Gavlesjåvegen, (her må du forbi en bom med skiltgjenkjenning og parkerer på stor parkeringsplass på Myregvarv.",   //,Adkomst med egen bil
            map: '',            //src/link
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
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },
        {
            id: 2,
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },
        {
            id: 3,
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },
        {
            id: 4,
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },
        {
            id: 5,
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },
        {
            id: 6,
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },
        {
            id: 7,
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },
        {
            id: 8,
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },
        {
            id: 9,
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },
        {
            id: 10,
            name: '',
            about: '',
            location: '',
            distance: 1,        //number
            time: 15,            //number
            image: [],          //src/link
            season: '',
            // accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            google_link: '',     //src/link
            creator: '',
            approved: false,
        },],
    },
};


