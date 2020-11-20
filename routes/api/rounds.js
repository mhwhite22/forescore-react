const express = require('express');
const router = express.Router();
const roundsCtrl = require('../../controllers/api/rounds');

router.use(require('../../config/auth'));

router.post('/', daysCtrl.create);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized'});
}

module.exports = router;