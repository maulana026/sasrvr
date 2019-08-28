const firebase = require('firebase')
const fbsd = require('./fbsd')

module.exports = async function penumpang(req, res) {
	fbsd()

	const db = firebase.firestore()

	res.type('application/json');
	var penumpangId = String(req.param('penumpangId'));
    db.collection("penumpang").where("angkot", "==", penumpangId).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(!Boolean(doc.data().naik)) {
                console.log(doc.data().id)
                res.json(String(doc.data().id))
            }
        })
    })

}