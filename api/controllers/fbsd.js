const firebase = require('firebase')

module.exports = async function fbsd() {
	firebase.initializeApp({
	    apiKey: "AIzaSyD0TP7PnIPGS12yE1_plnnsHT7-lNk2gjw",
		authDomain: "smartangkot.firebaseapp.com",
		databaseURL: "https://smartangkot.firebaseio.com",
		projectId: "smartangkot",
		storageBucket: "smartangkot.appspot.com",
		messagingSenderId: "1052207778717",
		appId: "1:1052207778717:web:553fafdd3044fe3f"
	})
}