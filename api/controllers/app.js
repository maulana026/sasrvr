const firebase = require('firebase')

firebase.initializeApp({
	    apiKey: "AIzaSyD0TP7PnIPGS12yE1_plnnsHT7-lNk2gjw",
		authDomain: "smartangkot.firebaseapp.com",
		databaseURL: "https://smartangkot.firebaseio.com",
		projectId: "smartangkot",
		storageBucket: "smartangkot.appspot.com",
		messagingSenderId: "1052207778717",
		appId: "1:1052207778717:web:553fafdd3044fe3f"
	})

module.exports = function app(req, res) {
	var mode = String(req.param('mode'))
	var idnya = String(req.param('Id'))
	var latitude = Number(req.param('latitude'))
	var longitude = Number(req.param('longitude'))
	const db = firebase.firestore()
	switch(mode){
		case 'penumpang':
			try {
				db.collection("angkot").doc(idnya).get().then(doc => {
			        	if (doc.exists) {
			        		res.json(String(doc.data().id))
			        	} else {
			        		res.json('null')
			        	}
			    })
			} catch(error) {
				res.json(error)
			}
		    break
		case 'naik':
			var datab = db.collection("penumpang").doc(idnya)
		    datab.get().then(doc => {
		        if (!doc.data().naik) {
		            datab.update({ naik: true })
		            res.json("naik")
		            if (!doc.data().turun) {
		                datab.update({ turun: true })
		                res.json("turun")
		            }
		        } else {
		        	res.json("belum naik/turun")
		        }
		    }) 
		    break
		case 'angkot':
			var datab = db.collection("angkot").doc(idnya)
		    datab.get().then(doc => {
		        if (!doc.data().status) {
		            datab.update({ status: true })
		            res.json("on")
		        } else {
		            datab.update({ status: false })
		            res.json("off")
		        }
		    }) 
		    break
		case 'letak':
			var datab = db.collection("angkot").doc(angkotId)
		    datab.update({
		        lat: latitude1,
		        lon: longitude1
		    })   
		    res.json("updated")
			break
		default:
			res.json("HIii")
	}
}