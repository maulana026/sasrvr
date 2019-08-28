const firebase = require('firebase')
const fbsd = require('./fbsd')


module.exports = async function angkot(req, res) {
	fbsd()
	const db = firebase.firestore()

	res.type('application/json');
	var angkotId = String(req.param('angkotId'));
    var datab = db.collection("angkot").doc(angkotId)
    datab.get().then(doc => {
        if (!doc.data().status) {
            datab.update({ status: true })
            res.json("on")
        } else {
            datab.update({ status: false })
            res.json("off")
        }
    })  	

}