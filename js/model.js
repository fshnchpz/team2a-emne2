const model = {
    app: {
        currentUser: '',
        currentPage: '', // main / trails / profile / users / login
        admin: '',
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
            image: '',          //src/link
            season: '',
            accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
        },
        loginDetails: {
            username: '',
            password: '',
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
                    name: 'testnavn0',
                    username: 'user0',
                    password: '1234',
                    location: '',
                    favorites: [''],     //trip id
                    myTrips: [''],
                },
                {
                    admin: true,           //boolean
                    name: 'testnavn1',
                    username: 'user1',
                    password: '1234',
                    location: '',
                    favorites: [''],     //trip id
                    myTrips: [''],
                },

            ],
        trips: [{
            id: 0,
            name: '',
            about: '',
            location: '',
            distance: 0,        //number
            time: 0,            //number
            image: '',          //src/link
            season: '',
            accessability: '',
            map: '',            //src/link
            difficulty: 0,      //number
            parking: false,         //boolean
            walking: false,        //boolean
            wheelchair: false,      //boolean
            bike: false,           //boolean
            creator: '',
            approved: false,
        }],
    },
};


