const firebase = require('firebase')
const fbsd = require('./fbsd')


module.exports = async function naik(req, res) {
	fbsd()
	res.type('application/json');
	const db = firebase.firestore()

	
	var penumpangId = String(req.param('penumpangId'));
    var datab = db.collection("penumpang").doc(penumpangId)
    datab.get().then(doc => {
        if (!doc.data().naik) {
            datab.update({ naik: true })
            res.json("naik")
            if (!doc.data().turun) {
                datab.update({ turun: true })
                res.json("turun")
            }
        }
    }) 
}