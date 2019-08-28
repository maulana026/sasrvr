const firebase = require('firebase')
const fbsd = require('./fbsd')


module.exports = async function angkot(req, res) {
	fbsd()
	res.type('application/json');
	const db = firebase.firestore()

	res.type('application/json');
	var angkotId = String(req.param('angkotId'));
	var latitude1 = Number(req.param('latitude'));
	var longitude1 = Number(req.param('longitude'));
    var datab = db.collection("angkot").doc(angkotId)
    datab.update({
        lat: latitude1,
        lon: longitude1
    })    	

}