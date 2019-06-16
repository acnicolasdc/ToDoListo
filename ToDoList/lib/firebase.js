import * as firebase from 'firebase';

class FireBase{
    static init(){
        firebase.initializeApp({
            apiKey: "AIzaSyAmtipBWC1DcOxpVpJlNRaV6Xy027hzEZU",
            authDomain: "todolisto-a745d.firebaseapp.com",
            databaseURL: "https://todolisto-a745d.firebaseio.com",
            projectId: "todolisto-a745d",
            storageBucket: "todolisto-a745d.appspot.com",
        })
    }
}

module.exports = FireBase